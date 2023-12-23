import { configureStore } from "@reduxjs/toolkit";
import adddressReducer from "./adressSlice";
import cartSlice from "./cartSlice";
const appStore = configureStore({
  reducer: {
    address: adddressReducer,
    cart: cartSlice,
  },
});

export default appStore;
