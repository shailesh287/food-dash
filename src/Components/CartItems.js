import { useSelector, useDispatch } from "react-redux";
import emptyCart from "../Images/emptyCart.avif";

import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
  selectItemsInCart,
} from "../Redux/cartSlice";
import { CDN_URL } from "../Utils/constant";
import { Link } from "react-router-dom";

const CartItems = () => {
  const cartItems = useSelector(selectItemsInCart);
  const dispatch = useDispatch();

  const removeItem = (id) => dispatch(removeFromCart({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

  if (cartItems.length === 0) {
    return (
      <div className=" ">
        <div className="flex flex-col items-center justify-between mb-12">
          <div>
            <img className="w-80 h-72 my-5" src={emptyCart} alt="empty-cart" />
          </div>
          <div style={{ color: "#535665" }} className="text-xl font-semibold">
            Your cart is empty
          </div>
          <div style={{ color: "#7E808C" }} className="text-sm my-2">
            You can go to home page to view more restaurants
          </div>
          <div className="my-5">
            <Link
              to="/"
              style={{ backgroundColor: "#FC8019" }}
              className="text-white p-3 font-semibold"
            >
              SEE RESTAURANTS NEAR YOU
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className="basis-7/12">
      {cartItems &&
        cartItems.map((item) => (
          <li
            key={item?.item?.card?.info?.id}
            className="flex gap-4 justify-between max-w-[600px] my-4"
          >
            <div className="basis-3/12">
              <img
                className="w-full h-full md:h-auto object-cover block rounded-md aspect-square"
                src={CDN_URL + item?.item?.card?.info?.imageId}
                alt=""
              />
            </div>
            <div className="basis-9/12">
              <p className="text-lg font-semibold">
                {item?.item?.card?.info?.name}
              </p>

              <p className="hidden md:block">
                {item?.item?.card?.info?.description?.length > 50
                  ? item?.item?.card?.info?.description.slice(0, 50) + "..."
                  : item?.item?.card?.info?.description}
              </p>

              <p className="my-2 space-x-1">
                <span className="font-semibold">
                  ₹
                  {parseFloat(
                    (
                      item?.quantity * parseFloat(item?.item?.itemPrice / 100)
                    ).toFixed(2)
                  )}
                </span>
                <span className="text-gray-800 font-normal">
                  ({item?.item?.itemPrice / 100} × {item?.quantity})
                </span>
              </p>

              {/* actions */}
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item?.item?.card?.info?.id)}
                    disabled={item?.quantity === 1}
                    className={
                      "bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                    }
                  >
                    -
                  </button>
                  <p className="font-bold w-8 h-8 flex justify-center items-center">
                    {item?.quantity}
                  </p>
                  <button
                    onClick={() => increaseQuantity(item?.item?.card?.info?.id)}
                    className="bg-orange-500 text-white font-bold w-8 h-8 rounded-md"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item?.item?.card?.info?.id)}
                  className="border border-orange-500 text-xs font-semibold text-orange-500 p-2 px-4 rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CartItems;
