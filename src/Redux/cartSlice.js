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
  },
});
export const selectItemsInCart = ({ cart }) => cart?.items;

export const { addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
