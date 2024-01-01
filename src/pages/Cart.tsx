import { useSelector } from "react-redux";
import { selectCartItems } from "../store/features/cartSlice";
import { Button, Heading } from "../components";
import { openModal, selectSignedInState, useAppDispatch } from "../store";
import { useNavigate } from "react-router-dom";
import { CartProduct } from "../components";

export const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const isSignedIn = useSelector(selectSignedInState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isPurchaseButtonDisabled = !Object.entries(cartItems).length;

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
              <li key={id} className="p-4 md:p-0 w-56 sm:w-60 md:w-96 mb-4">
                <CartProduct product={product} />
              </li>
            ))}
          </ul>
        </section>
        <Button
          onClick={onPurchaseClick}
          size="large"
          width="w-60"
          isDisabled={isPurchaseButtonDisabled}
        >
          Purchase
        </Button>
      </div>
    </div>
  );
};
