import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constant";
import { addtoCart } from "../Redux/cartSlice";
import toast from "react-hot-toast";

const RestaurantMenuItem = ({ items, index, activeIndex, setActiveIndex }) => {
  // console.log(activeIndex, index);
  // console.log(items?.card?.card?.itemCards);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addtoCart(item));
    toast.success("Added to cart!");
  };
  let Cards =
    items.card.card?.itemCards || items.card.card?.categories[0]?.itemCards;

  let cardsLength =
    items.card.card.itemCards?.length ||
    items.card.card?.categories[0]?.itemCards.length;

  return (
    <>
      {Cards ? (
        <>
          <div
            onClick={() => setActiveIndex(index)}
            className="flex cursor-pointer justify-between items-center p-4 my-2 rounded-md bg-gray-50 select-none"
          >
            <h3 className="text-lg font-semibold">
              {items.card.card.title} ({cardsLength})
            </h3>
            <button>
              {activeIndex === index ? (
                <ChevronUpIcon className="w-6 h-6" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 " />
              )}
            </button>
          </div>
        </>
      ) : (
        ""
      )}

      {activeIndex === index && (
        <ul className="p-4">
          {Cards.map((item, i) => {
            const itemPrice =
              item?.card?.info?.price || item?.card?.info?.defaultPrice;
            const endIndex = (item?.card?.info?.description).indexOf("\n");
            console.log(endIndex);
            const description = (item?.card?.info?.description).slice(
              0,
              endIndex
            );
            return (
              <li
                className="p-2 py-8 flex gap-4 md:gap-8 justify-between items-center border-b"
                key={i}
              >
                <div className="basis-8/12 space-y-2">
                  <h2 className="text-base font-semibold">
                    {item?.card?.info?.name}
                  </h2>
                  <p className="text-xs font-semibold">₹{itemPrice / 100}</p>
                  <p className="text-xs hidden md:block  text-gray-500">
                    {endIndex !== -1 ? description.slice(1, -1) : description}
                  </p>
                </div>

                <div className="w-full basis-4/12 relative">
                  <img
                    className="w-full h-32 aspect-video object-cover rounded-md"
                    src={CDN_URL + item?.card?.info?.imageId}
                    alt=""
                  />
                  <button
                    onClick={() => handleAddToCart({ ...item, itemPrice })}
                    className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-bold p-2 px-6 rounded-md absolute shadow-md left-[50%] -bottom-5 -translate-x-[50%]"
                  >
                    ADD
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="h-[16px] bg-gray-100"> </div>
    </>
  );
};
export default RestaurantMenuItem;
