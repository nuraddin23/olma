import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBought: false,
};

const buyNowSlice = createSlice({
  name: "buyNow",
  initialState,
  reducers: {
    setBoughtStatus: (state, action) => {
      state.isBought = action.payload;
    },
  },
});

export const { setBoughtStatus } = buyNowSlice.actions;

export default buyNowSlice.reducer;
