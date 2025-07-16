import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    // Here we cannot call API; bcoz it's for SYNC Data holding
    loadCart: (state, action) => {
      state.cartData = action.payload; //Here 'payload' means 'data'
    },
  },
});

export default cartSlice.reducer;
export const {loadCart} = cartSlice.actions
