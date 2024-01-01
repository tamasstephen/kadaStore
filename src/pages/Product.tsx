import { useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/api/useGetProduct";
import type { Product as ProductType } from "../types";
import { Button, Rating, Tag } from "../components";
import { useAppDispatch } from "../store";
import { addToCart } from "../store/features/cartSlice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Carousel } from "../components/Carousel";

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
    <div className="min-w-full min-h-screen flex justify-center xl:mt-12">
      <div className="md:flex justify-center max-w-screen-lg my-14 px-4 xl:px-0">
        <section className="md:mr-8 xl:mr-12 lg:min-w-[50%] lg:flex lg:justify-center">
          <div className="mb-16 md:mb-0">
            <Carousel
              images={[
                product.image,
                "https://picsum.photos/seed/picsum/400/400",
                "https://picsum.photos/400/400?grayscale",
              ]}
            />
          </div>
        </section>
        <section className="flex flex-col">
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
          <p className="font-general font-medium text-fontGray mt-2 xl:text-2xl xl:mt-3">
            {product.description}
          </p>
          <div className="mt-3">
            <p className="font-general text-gray-400 xl:mt-3 font-medium  mt-2 xl:text-2xl ">
              Stock: {Math.floor(Math.random() * 100)}
            </p>
            <p className="font-general text-gray-400 xl:mt-3 font-medium  mt-2 xl:text-2xl ">
              Category: {product.category}
            </p>
          </div>
          <div className="py-4 xl:py-7">
            <Tag discount={(parseInt(id as string) % 4) + 1} />
          </div>
          <div className="xl:flex justify-between items-center">
            <p className="mb-4 text-3xl xl:mb-0 font-general text-fontGray xl:text-5xl font-semibold">
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
