import { useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/api/useGetProduct";
import type { Product as ProductType } from "../types";
import { Button, Rating } from "../components";
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
      <div className="md:flex justify-center max-w-screen-lg my-14 px-4 xl:px-0">
        <section className="xl:mr-12 flex justify-center">
          <div className="rounded-md aspect-square xl:max-w-[480px] overflow-hidden md:min-w-80">
            <img
              className="aspect-square object-contain object-top lg:max-w-[480px] rounded-md"
              src={product.image}
            />
          </div>
        </section>
        <section className="flex flex-col justify-center">
          <div className="xl:flex justify-between items-center mb-2.5">
            <h1 className="mb-4 xl:mb-0 font-general font-semibold text-fontGray text-3xl mt-4 xl:mt-0 xl:text-5xl max-w-[320px]">
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
          <div className="xl:flex justify-between items-center  mt-3">
            <p className="mb-4 xl:mb-0 font-general text-fontGray text-5xl font-semibold">
              {product.price} $
            </p>
            <Button
              onClick={() => dispatch(addToCart(product))}
              size="large"
              width="w-56"
            >
              Add to cart
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
