import { Card } from "../components/Card";
import { useGetProducts } from "../hooks/api/useGetProducts";
import { Product } from "../types/product";

export const Products = () => {
  const { data, loading, error } = useGetProducts<Product>(
    "https://fakestoreapi.com/products",
    10
  );

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col items-center bg-bgGray">
      <h1 className=" text-5xl font-semibold font-general my-12 text-fontGray">
        See products
      </h1>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
        {data.map((product) => (
          <Card
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
          />
        ))}
      </section>
    </div>
  );
};
