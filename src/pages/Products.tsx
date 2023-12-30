import { Card } from "../components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { fetchProducts, selectAllProducts, selectFetchStatus } from "../store";
import { useEffect, useRef, useState } from "react";
import { FetchStatus } from "../constants";

const INITIAL_FETCH_LIMIT = 8;

export const Products = () => {
  const [fetchLimit, setFetchLimit] = useState(INITIAL_FETCH_LIMIT);
  const dispatch = useAppDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectFetchStatus);
  const boundary = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (status === FetchStatus.IDLE) {
      dispatch(fetchProducts(fetchLimit));
    }
  }, [dispatch, products, status, fetchLimit]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && status === FetchStatus.FULFILLED) {
        dispatch(fetchProducts(fetchLimit + INITIAL_FETCH_LIMIT));
        setFetchLimit((state) => state + INITIAL_FETCH_LIMIT);
      }
    });
    if (boundary.current) {
      observer.observe(boundary.current); // Start observing the loader element
    }

    return () => {
      if (boundary.current) {
        observer.unobserve(boundary.current); // Cleanup: Stop observing when component unmounts
      }
    };
  });

  if (!products.length && status !== FetchStatus.REJECTED) {
    return <div>Loading</div>;
  }

  if (products) {
    return (
      <div className="flex flex-col items-center bg-bgGray pb-12">
        <h1 className=" text-5xl font-semibold font-general my-12 text-fontGray">
          See products
        </h1>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              key={product.id}
            />
          ))}
        </section>
        <div ref={boundary} className="w-full h-12"></div>
      </div>
    );
  }
};
