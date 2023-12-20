import { configureStore } from "@reduxjs/toolkit";
import adddressReducer from "./adressSlice";
const appStore = configureStore({
  reducer: {
    address: adddressReducer,
  },
});

export default appStore;
