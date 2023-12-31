import { PropsWithChildren } from "react";

interface HeadingProps extends PropsWithChildren {}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className=" text-5xl font-semibold font-general my-12 text-fontGray">
      {children}
    </h1>
  );
};
