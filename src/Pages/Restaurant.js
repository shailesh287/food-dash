import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import ShimmerRestaurant from "../Components/ShimmerRestaurant";
import RestaurantInfo from "../Components/RestaurantInfo";
import RestaurantMenu from "../Components/RestaurantMenu";

const Restaurant = () => {
  const { id } = useParams();
  const { restaurant, isLoading } = useRestaurantMenu(id);

  return (
    <div className="container-md my-8">
      {isLoading ? (
        <ShimmerRestaurant />
      ) : (
        <>
          <RestaurantInfo info={restaurant?.cards[0]?.card?.card?.info} />
          <RestaurantMenu
            menu={
              restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            }
          />
        </>
      )}
    </div>
  );
};
export default Restaurant;
