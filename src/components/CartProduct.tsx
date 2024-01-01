import { CartItem } from "../types";
import Bin from "../assets/delete.svg?react";
import { useAppDispatch } from "../store";
import { removeFromCart } from "../store/features/cartSlice";

interface CartProductProps {
  product: CartItem;
}

export const CartProduct = ({ product }: CartProductProps) => {
  const dispatch = useAppDispatch();
  return (
    <article className="md:flex">
      <img
        className="mb-2 md:mb-0 aspect-square object-cover object-top rounded-md md:w-40 mr-4"
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
        <button onClick={() => dispatch(removeFromCart(product.product))}>
          <Bin className="fill-primaryPurple" />
        </button>
      </div>
    </article>
  );
};
