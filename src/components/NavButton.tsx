import { PropsWithChildren } from "react";

interface NavButtonProps extends PropsWithChildren {
  onClick: () => void;
  isInverse?: boolean;
}

export const NavButton = ({ onClick, children, isInverse }: NavButtonProps) => {
  const colorStyles = isInverse
    ? "bg-white text-black border border-black"
    : "bg-black text-white";
  return (
    <button
      className={`mr-2 rounded-full font-semibold px-4 py-1 text-sm ${colorStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
