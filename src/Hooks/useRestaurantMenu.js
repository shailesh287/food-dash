import axios from "axios";
import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../Utils/constant";

const useRestaurantMenu = (restId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(RESTAURANT_URL + `/${restId}`);
        setRestaurant(data?.data);
      } catch (err) {
        console.log(err.response);
        setError(err.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { restaurant, isLoading, error };
};

export default useRestaurantMenu;
