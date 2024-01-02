import { PropsWithChildren } from "react";

interface NavButtonProps extends PropsWithChildren {
  onClick: () => void;
  isInverse?: boolean;
}

export const NavButton = ({ onClick, children, isInverse }: NavButtonProps) => {
  const colorStyles = isInverse
    ? "bg-white text-black border border-black hover:bg-gray-700 hover:text-white transition duration-150"
    : "bg-black text-white hover:bg-gray-700 transition duration-150";
  return (
    <button
      className={`mr-2 rounded-full font-semibold px-4 py-1 text-sm ${colorStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
