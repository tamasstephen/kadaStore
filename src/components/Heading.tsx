import { PropsWithChildren } from "react";

interface HeadingProps extends PropsWithChildren {
  centered?: boolean;
}

export const Heading = ({ children, centered }: HeadingProps) => {
  return (
    <h1
      className={`text-5xl font-semibold font-general my-12 text-fontGray ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </h1>
  );
};
