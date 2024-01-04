import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import useRestaurants from "../Hooks/useRestaurant";
import { CDN_URL, RESTAURANT_URL } from "../Utils/constant";
import FoodList from "../Components/FoodList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAddress } from "../Redux/adressSlice";

const Search = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { address } = useSelector(selectAddress);

  const { foods, isLoading } = useRestaurants();

  useEffect(() => {
    const getSuggestions = async () => {
      const data = await axios.get(
        "https://corsproxy.org/?" +
          encodeURIComponent(
            `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${address.latitude}&lng=${address.longitude}&trackingId=undefined&str=${value}`
          )
      );
      setSuggestions(
        data?.data?.data?.suggestions?.filter(
          (item) => item.type === "RESTAURANT"
        )
      );
    };

    const debounce = setTimeout(() => {
      getSuggestions();
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [value]);

  const navigate = useNavigate();
  const getRestInfo = (metaData) => {
    const data = JSON.parse(metaData);
    const id = data?.data?.primaryRestaurantId;

    navigate(`/restaurants/${id}`);
  };

  return (
    <>
      <div className="container-max  ">
        <div className="bg-white w-full  pt-[48px] pb-[8px] top-[80px] z-20">
          <div className="border border-gray-300 flex justify-between p-4 ">
            <input
              className=" w-[80%] outline-none"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="Search for Restaurant"
            />
            <MagnifyingGlassIcon className="w-7 h-7" />
          </div>
        </div>
        <div>
          {suggestions ? (
            suggestions.map((suggestions, index) => (
              <div
                key={index}
                className="cursor-pointer flex ml-4 my-4 hover:bg-gray-100 "
                onClick={() => {
                  if (suggestions?.tagToDisplay === "Restaurant") {
                    getRestInfo(suggestions?.metadata);
                  }
                }}
              >
                <div>
                  <img
                    className="w-16 h-16 rounded-lg"
                    src={`${CDN_URL}/${suggestions?.cloudinaryId}`}
                    alt={suggestions?.text}
                  />
                </div>
                <div className="flex flex-col justify-center px-5">
                  <div
                    style={{ color: "#282C3F" }}
                    className="text-sm font-medium"
                  >
                    {suggestions.text}
                  </div>
                  <div style={{ color: "#7E808C" }} className="text-sm">
                    {suggestions.type}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className=" py-7">
              <FoodList foods={foods} isLoading={isLoading} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
