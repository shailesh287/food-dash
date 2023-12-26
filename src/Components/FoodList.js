import Banner from "./Banner";
import { useKeenSlider } from "keen-slider/react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import FoodItem from "./FoodItem";
import ShimmerFoodList from "./ShimmerFoodList";

const FoodList = ({ isLoading, foods }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 480px)": {
        slides: { perView: 4, spacing: 10 },
      },
      "(min-width: 480px)": {
        slides: { perView: 6, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 8, spacing: 10 },
      },
    },
  });

  if (!foods) {
    return null;
  }

  return (
    <div className="container-max overflow-hidden  my-6 mt-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl text-zinc-700">
          {foods?.card?.card?.header?.title}
        </h1>
        {!isLoading && (
          <div className="flex gap-2 items-center">
            <button
              disabled={currentSlide === 0}
              onClick={() => instanceRef.current?.prev()}
              className="bg-gray-100 p-2 rounded-full disabled:text-gray-300"
            >
              <ArrowLongLeftIcon className="w-4 h-4" />{" "}
            </button>
            <button
              disabled={
                currentSlide ===
                instanceRef?.current?.track?.details?.slides?.length - 1
              }
              onClick={() => instanceRef.current?.next()}
              className="bg-gray-100 p-2 rounded-full disabled:text-gray-300"
            >
              <ArrowLongRightIcon className="w-4 h-4" />{" "}
            </button>
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="flex gap-10 md:gap-14 mb-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <ShimmerFoodList key={i} />
          ))}
        </div>
      ) : (
        <div ref={sliderRef} className="keen-slider flex">
          {foods?.card?.card?.gridElements?.infoWithStyle?.info?.map((food) => (
            <FoodItem food={food} key={food.id} />
          ))}
        </div>
      )}
    </div>
  );
};
export default FoodList;
