import { PropsWithChildren } from "react";

interface ProductDetailProps extends PropsWithChildren {}

export const ProductDetail = ({ children }: ProductDetailProps) => {
  return (
    <p className="font-general text-gray-400 xl:mt-3 font-medium  mt-2 xl:text-2xl ">
      {children}
    </p>
  );
};
