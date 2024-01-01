/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import LeftChevron from "../assets/chevron_left.svg?react";

interface SliderProps {
  images: string[];
}

export const Carousel = ({ images }: SliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const hasNext = images.length > currentImage + 1;
  const hasPrev = currentImage > 0;
  const nextButtonColor = hasNext ? "fill-fontGray" : "fill-gray-400";
  const prevButtonColor = hasPrev ? "fill-fontGray" : "fill-gray-400";
  return (
    <div>
      <div className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]">
        <button
          onClick={() => setCurrentImage((state) => state - 1)}
          disabled={!hasPrev}
          className="left-2 absolute top-1/2 -translate-y-1/2 lg:-left-10"
        >
          <LeftChevron className={`h-12 ${prevButtonColor} `} />
        </button>
        <img
          className="object-contain w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-md"
          src={images[currentImage]}
        />
        <button
          onClick={() => setCurrentImage((state) => state + 1)}
          disabled={!hasNext}
          className="right-2 absolute top-1/2 lg:-right-10  -translate-y-1/2 "
        >
          <LeftChevron className={`h-12 rotate-180 ${nextButtonColor}`} />
        </button>
        <div className="flex justify-center mt-4 xl:mt-9">
          <div>
            {images.map((_, idx) => (
              <button onClick={() => setCurrentImage(idx)}>
                <div
                  className={`w-2.5 h-2.5 rounded-full mr-3 ${
                    idx === currentImage ? "bg-primaryPurple" : "bg-gray-400"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
