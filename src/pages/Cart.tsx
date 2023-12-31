import { useSelector } from "react-redux";
import { selectCartItems } from "../store/features/cartSlice";
import { Button, Heading } from "../components";
import { openModal, selectSignedInState, useAppDispatch } from "../store";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const isSignedIn = useSelector(selectSignedInState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onPurchaseClick = () => {
    if (!isSignedIn) {
      dispatch(openModal());
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="min-w-screen min-h-screen flex justify-center pb-10">
      <div className="w-full flex flex-col items-center">
        <Heading>Cart</Heading>
        <section className="flex w-full justify-center mb-8">
          <ul className="w-full flex flex-col items-center">
            {Object.entries(cartItems).map(([id, product]) => (
              <li key={id} className="w-96 mb-4">
                <article className="flex">
                  <img
                    className="w-1/4 aspect-square object-cover object-top rounded-md w-40 mr-4"
                    src={product.product.image}
                  />
                  <div>
                    <h2 className="font-general text-fontGray text-lg font-semibold mb-2">
                      {product.product.title}
                    </h2>
                    <p className="font-general text-fontGray mb-2">
                      Quantity: {product.quantity}
                    </p>
                    <p className="font-general text-fontGray text-lg font-semibold">
                      {product.quantity * product.product.price} $
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
        <Button onClick={onPurchaseClick} size="large" width="w-60">
          Purchase
        </Button>
      </div>
    </div>
  );
};
