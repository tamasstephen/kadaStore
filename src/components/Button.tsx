import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  size: "default" | "large";
  width?: string;
}

export const Button = ({ onClick, children, size, width }: ButtonProps) => {
  const buttonSize = size === "default" ? "h-10" : "h-16 text-xl";
  const buttonWidth = width ? width : "w-full";
  return (
    <button
      className={`font-general bg-black text-white rounded-full font-semibold ${buttonSize} ${buttonWidth}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
