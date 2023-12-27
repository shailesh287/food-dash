import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAddress } from "../Redux/adressSlice";

const useRestaurants = (url) => {
  const { address } = useSelector(selectAddress);
  const [banners, setBanners] = useState([]);
  const [foods, setFoods] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [appInfo, setAppInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRestaurants = async () => {
    setIsLoading(true);
    setError(null);

    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://corsproxy.org/?" +
          encodeURIComponent(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${address.latitude}&lng=${address.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
          )
      );

      if (data?.data) {
        setBanners(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === "topical_banner"
          )[0]
        );

        setFoods(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === "whats_on_your_mind"
          )[0]
        );

        setTopRestaurants(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === "top_brands_for_you"
          )[0]
        );
        setRestaurants(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === "restaurant_grid_listing"
          )[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setAppInfo(
          data?.data?.cards.filter(
            (items) => items?.card?.card?.id === "app_install_links"
          )[0]?.card?.card
        );
      }
    } catch (err) {
      console.log(err.response);
      setError(err.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, [address.city]);
  return {
    banners,
    foods,
    topRestaurants,
    restaurants,
    isLoading,
    appInfo,
    error,
    triggerGetRestaurants: () => {
      return getRestaurants();
    },
  };
};

export default useRestaurants;
