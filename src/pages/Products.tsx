import { Card, Spinner } from "../components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { fetchProducts, selectAllProducts, selectFetchStatus } from "../store";
import { useEffect, useRef, useState } from "react";
import { FetchStatus } from "../constants";
import { Heading } from "../components";

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

  // Handle infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && status === FetchStatus.FULFILLED) {
        dispatch(fetchProducts(fetchLimit + INITIAL_FETCH_LIMIT));
        setFetchLimit((state) => state + INITIAL_FETCH_LIMIT);
      }
    });
    if (boundary.current) {
      observer.observe(boundary.current);
    }

    return () => {
      if (boundary.current) {
        observer.unobserve(boundary.current);
      }
    };
  });

  if (!products.length && status !== FetchStatus.REJECTED) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="-translate-y-[200%]">
          <Spinner />
        </div>
      </div>
    );
  }

  if (products) {
    return (
      <div className="flex flex-col items-center pb-12">
        <Heading>See products</Heading>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-24">
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
