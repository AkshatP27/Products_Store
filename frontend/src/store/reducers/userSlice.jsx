import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    // Here we cannot call API; bcoz it's for SYNC Data holding
    loaduser: (state, action) => {
      state.userData = action.payload; //Here 'payload' means 'data'
    },
    removeuser: (state, action) => {
      state.userData = null;
    },
  },
});

export default userSlice.reducer;
export const { loaduser, removeuser } = userSlice.actions;
