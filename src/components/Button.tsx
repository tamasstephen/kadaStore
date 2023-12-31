import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  size: "default" | "large" | "small";
  width?: string;
  isDisabled?: boolean;
}

export const Button = ({
  onClick,
  children,
  size,
  width,
  isDisabled,
}: ButtonProps) => {
  const buttonSize = size === "default" ? "h-10" : "h-16 text-xl";
  const buttonWidth = width ? width : "w-full";
  const buttonBg = isDisabled ? "bg-gray-400" : "bg-black";
  return (
    <button
      className={`font-genera text-white rounded-full font-semibold ${buttonSize} ${buttonWidth} ${buttonBg}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
