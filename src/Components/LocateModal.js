import { ArrowPathIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { getLocation } from "../Utils/getLocation";
import { setAddress } from "../Redux/adressSlice";
import { useDispatch } from "react-redux";

const LocateModal = (props) => {
  const modalRef = useRef();
  const [isLoading, setisLoading] = useState(false);
  //   const { triggerGetRestaurants } = useRestaurants(GET_RESTAURANTS_URL);
  const dispatch = useDispatch();

  const getGeoLocation = async () => {
    try {
      setisLoading(true);

      const res = await getLocation();

      res && setisLoading(false);

      // set address
      dispatch(setAddress(res));

      // close modal
      //   dispatch(closeLocationModal());
      props.closeModal();

      // trigger fetch request
      //   triggerGetRestaurants();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-900/70 fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-[90%] flex flex-col justify-center items-center max-w-[600px] m-auto p-8 bg-white rounded-md min-h-[240px]">
        <button
          onClick={props.closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          X
        </button>
        <h1 className="text-2xl font-semibold ">
          Please provide your location
        </h1>
        <button
          onClick={getGeoLocation}
          className="w-full max-w-[360px] flex justify-center items-center gap-2 border p-2 px-4 my-4 bg-gray-50  shadow-sm rounded-md"
        >
          {isLoading ? (
            <p className="flex items-center gap-2">
              Accessing...Please wait <ArrowPathIcon className="w-4 h-4" />
            </p>
          ) : (
            <p className="flex items-center gap-2">
              Access my location <MapPinIcon className="w-4 h-4" />
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default LocateModal;
