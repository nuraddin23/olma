import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const selectedProductsSlice = createSlice({
  name: "selectedProducts",
  initialState,
  reducers: {
    selectedProduct: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    removeSelectedProduct: (state) => {
      state = {};
    },
  },
});

export default selectedProductsSlice.reducer;
export const { selectedProduct, removeSelectedProduct } =
  selectedProductsSlice.actions;
