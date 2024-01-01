interface TagProps {
  discount: number;
  isCardTag?: boolean;
}

export const Tag = ({ discount, isCardTag }: TagProps) => {
  const customStyles = isCardTag
    ? "absolute py-1 px-2 top-2 right-2 text-sm"
    : "py-1 px-2 xl:text-xl xl:py-2 xl:px-4";
  return (
    <span
      className={`font-semibold font-general rounded-full bg-primaryPurple text-white ${customStyles}`}
    >
      {`-${discount.toFixed(2)} %`}
    </span>
  );
};
