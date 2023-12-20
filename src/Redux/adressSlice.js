import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: JSON.parse(localStorage.getItem("address")) || {
    latitude: 15.4909301,
    longitude: 73.8278496,
    city: "Panaji",
  },
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
      localStorage.setItem("address", JSON.stringify(state.address));
    },
  },
});

export const selectAddress = ({ address }) => address;

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
