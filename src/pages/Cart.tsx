/// <reference types="vite-plugin-svgr/client" />
import { useSelector } from "react-redux";
import { removeFromCart, selectCartItems } from "../store/features/cartSlice";
import { Button, Heading } from "../components";
import { openModal, selectSignedInState, useAppDispatch } from "../store";
import { useNavigate } from "react-router-dom";
import Bin from "../assets/delete.svg?react";

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
              <li key={id} className="w-96 mb-4">
                <article className="flex">
                  <img
                    className="w-1/4 aspect-square object-cover object-top rounded-md w-40 mr-4"
                    src={product.product.image}
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="font-general text-fontGray text-lg font-semibold mb-2">
                        {product.product.title}
                      </h2>
                      <p className="font-general text-fontGray mb-2">
                        Quantity: {product.quantity}
                      </p>
                      <p className="font-general text-fontGray text-lg font-semibold mb-2">
                        {product.quantity * product.product.price} $
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(removeFromCart(product.product))}
                    >
                      <Bin className="fill-primaryPurple" />
                    </button>
                  </div>
                </article>
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
