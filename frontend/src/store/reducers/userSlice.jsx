import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    // Here we cannot call API; bcoz it's for SYNC Data holding
    loaduser: (state, action) => {
      state.userData = action.payload; //Here 'payload' means 'data'
    },
  },
});

export default userSlice.reducer;
export const {loaduser} = userSlice.actions
