import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import ShimmerRestaurant from "../Components/ShimmerRestaurant";
import RestaurantInfo from "../Components/RestaurantInfo";
import RestaurantMenu from "../Components/RestaurantMenu";

const Restaurant = () => {
  const { id } = useParams();
  const { restaurant, isLoading } = useRestaurantMenu(id);

  function getRestaurantInfo(restaurant) {
    const info = restaurant?.cards.find((card) => card?.card?.card?.info)?.card
      ?.card?.info;

    return info;
  }

  function getRestaurantMenu(restaurant) {
    const menu = restaurant?.cards.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    return menu;
  }
  return (
    <div className="container-md my-8">
      {isLoading ? (
        <ShimmerRestaurant />
      ) : (
        <>
          <RestaurantInfo info={getRestaurantInfo(restaurant)} />
          <RestaurantMenu menu={getRestaurantMenu(restaurant)} />
        </>
      )}
    </div>
  );
};
export default Restaurant;
