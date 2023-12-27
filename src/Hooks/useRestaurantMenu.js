import axios from "axios";
import { useEffect, useState } from "react";

const useRestaurantMenu = (restId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://corsproxy.org/?" +
            encodeURIComponent(
              `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.061436790959643&lng=80.24084452539682&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
            )
        );
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
