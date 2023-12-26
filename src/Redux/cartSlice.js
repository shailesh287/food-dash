import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.items.push({
        item: action.payload,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem?.item?.card?.info?.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToIncrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;

      state.items = state.items
        .map((cartItem) => {
          if (cartItem?.item?.card?.info?.id === id) {
            if (cartItem.quantity === 1) {
              return null;
            } else {
              cartItem.quantity -= 1;
            }
          }
          return cartItem;
        })
        .filter(Boolean);

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});
export const selectItemsInCart = ({ cart }) => cart?.items;

export const selectTotalPrice = ({ cart }) => {
  return cart?.items.reduce((total, cartItem) => {
    return total + cartItem.item.itemPrice * cartItem.quantity;
  }, 0);
};

export const {
  addtoCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
