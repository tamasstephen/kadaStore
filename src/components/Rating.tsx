/// <reference types="vite-plugin-svgr/client" />
import Star from "../assets/star.svg?react";

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  const arr = new Array(5).fill("");
  return (
    <div className="flex">
      {arr.map((_, idx) =>
        idx < rating ? (
          <Star className="fill-primaryPurple" />
        ) : (
          <Star className="fill-gray-300" />
        )
      )}
    </div>
  );
};
