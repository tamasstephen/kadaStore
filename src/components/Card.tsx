import { useNavigate } from "react-router-dom";
import { Button, Tag } from ".";

interface CardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  discount?: number;
}

export const Card = (props: CardProps) => {
  const { id, image, title, price, description, discount } = props;
  const navigate = useNavigate();

  const cardTitle =
    title.length < 15 ? title : `${title.substring(0, 15).trim()}...`;
  const cardDescription =
    description.length <= 60
      ? description
      : `${description.substring(0, 60).trim()}...`;
  return (
    <article className="h-[320px] w-[305px] px-2.5 border pt-2.5 pb-6 border-borderGray rounded-md bg-white">
      <div className="aspect-video overflow-hidden relative rounded-md font-general">
        <img
          className="object-cover object-top aspect-video roudned-md"
          src={image}
        />
        {discount && <Tag discount={discount} isCardTag />}
      </div>
      <div className="flex justify-between mt-2.5 mb-1">
        <h2 className="text-xl font-semibold text-fontGray font-general">
          {cardTitle}
        </h2>
        <p className="text-fontGray text-xl font-semibold font-general">
          {price} $
        </p>
      </div>
      <p className="text-fontGray font-medium text-sm font-general mb-3">
        {cardDescription}
      </p>
      <Button onClick={() => navigate(`/${id}`)} size="default">
        {" "}
        See details
      </Button>
    </article>
  );
};
