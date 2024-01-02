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
  const buttonSize = size === "default" ? "h-10" : "h-10 xl:h-16 xl:text-xl";
  const buttonWidth = width ? width : "w-full";
  const buttonBg = isDisabled ? "bg-gray-400" : "bg-black hover:bg-gray-700";
  return (
    <button
      className={`font-genera transition duration-300 ease-in-out text-white rounded-full font-semibold ${buttonSize} ${buttonWidth} ${buttonBg}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
