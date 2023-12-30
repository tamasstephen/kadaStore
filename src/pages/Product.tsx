import { useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/api/useGetProduct";
import type { Product as ProductType } from "../types";
import { Rating } from "../components";
import { useAppDispatch } from "../store";
import { addToCart } from "../store/features/cartSlice";

export const Product = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { data: product, error, loading } = useGetProduct<ProductType>(id);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading || !product) {
    return <div>Loading</div>;
  }

  return (
    <div className="min-w-full min-h-screen flex justify-center items-center">
      <div className="flex justify-center max-w-screen-lg my-14">
        <section className="mr-12">
          <div className="rounded-md aspect-square max-w-[480px] overflow-hidden">
            <img
              className="aspect-square object-cover object-top max-w-[480px] rounded-md"
              src={product.image}
            />
          </div>
        </section>
        <section className="flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2.5">
            <h1 className="font-general font-semibold text-fontGray text-5xl max-w-[320px]">
              {product.title}
            </h1>
            <div>
              <div className="flex items-center">
                <Rating rating={Math.floor(product.rating.rate)} />
                <p className="ml-2 font-general font-semibold text-fontGray">
                  {product.rating.rate}
                </p>
              </div>
            </div>
          </div>
          <p className="font-general font-medium text-fontGray mt-3">
            {product.description}
          </p>
          <p className="font-general text-gray-400 mt-3 font-medium">
            Category: {product.category}
          </p>
          <div className="flex justify-between items-center  mt-3">
            <p className="font-general text-fontGray text-5xl font-semibold">
              {product.price} $
            </p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="font-general bg-black h-10 text-white font-semibold w-[260px] rounded-full"
            >
              Add to cart
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
