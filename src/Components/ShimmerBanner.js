import { useEffect, useState } from "react";
const ShimmerBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageList = [
    require("../Images/icecream.avif"),
    require("../Images/frappe.avif"),
    require("../Images/fries.avif"),
    require("../Images/noodles.avif"),
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * imageList.length);
      } while (randomIndex === currentImageIndex);
      setCurrentImageIndex(randomIndex);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, imageList]);

  return (
    <div className="h-[340px] bg-[#171a29] text-white text-opacity-80 text-center flex flex-col items-center justify-center relative p-0 md:p-20">
      <div className=" loader-container m-auto">
        <div className="loader">
          <div></div>
        </div>
        <img
          className="w-[40px] h-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={imageList[currentImageIndex]}
          alt=""
        />
      </div>
      <div className="text-white block	md:text-3xl text-xl mt-4 ">
        Looking for great food near you...
      </div>
    </div>
  );
};

export default ShimmerBanner;
