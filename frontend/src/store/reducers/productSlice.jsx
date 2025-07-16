import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

const productSlice = createSlice({
  initialState,
  name: "product",
  reducers: {
    // Here we cannot call API; bcoz it's for SYNC Data holding
    loadproduct: (state, action) => {
      state.productData = action.payload; //Here 'payload' means 'data'
    },
  },
});

export default productSlice.reducer;
export const {loadproduct} = productSlice.actions
