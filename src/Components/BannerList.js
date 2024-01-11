import Banner from "./Banner";
import { useKeenSlider } from "keen-slider/react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import ShimmerBanner from "./ShimmerBanner";
import { Link } from "react-router-dom";

const BannerList = ({ isLoading, banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 480px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
  });
  if (!banners) {
    return null;
  }

  return (
    <div className=" container-max overflow-hidden border-b border-gray-300 pb-12 my-6 mt-8">
      {!isLoading && (
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-2xl text-zinc-700">
            {banners?.card?.card?.header?.title}
          </h1>
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
        </div>
      )}

      {isLoading ? (
        <div className="w-full">
          <ShimmerBanner />
        </div>
      ) : (
        <div ref={sliderRef} className="keen-slider flex ">
          {banners?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
            (banner) => (
              <Link to={`/restaurants/${banner.info.id}`} key={banner.id}>
                <Banner banner={banner} key={banner.id} />
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};
export default BannerList;
