import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedProducts: [],
};

const addToBasketSlice = createSlice({
  name: "addToBasket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingProduct = state.addedProducts.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.isSelected = false;
      } else {
        state.addedProducts.push({
          ...action.payload,
          quantity: 1,
          isSelected: false,
        });
      }
    },
    removeFromBasket: (state, action) => {
      const existingProduct = state.addedProducts.find(
        (product) => product.id === action.payload
      );

      if (existingProduct) {
        existingProduct.quantity = Math.max(existingProduct.quantity - 1, 0);
      }
      state.addedProducts = state.addedProducts.filter(
        (product) => product.quantity > 0
      );
    },
    toggleProductSelection: (state, action) => {
      const product = state.addedProducts.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.isSelected = !product.isSelected;
      }
    },
    removeProductFromBasket: (state, action) => {
      state.addedProducts = state.addedProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    selectAllProducts: (state) => {
      state.addedProducts.forEach((product) => {
        product.isSelected = true;
      });
    },
    removeSelectedProducts: (state) => {
      state.addedProducts = state.addedProducts.filter(
        (product) => !product.isSelected
      );
    },
    toggleSelectAllProducts: (state) => {
      state.addedProducts.forEach((product) => {
        product.isSelected = !product.isSelected;
      });
    },
    resetAddedProductsSlice: (state) => {
      state.addedProducts = [];
    },
    removeAllSelectedProducts: (state) => {
      state.addedProducts = state.addedProducts.filter(
        (product) => !product.isSelected
      );
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  toggleProductSelection,
  removeProductFromBasket,
  selectAllProducts,
  removeSelectedProducts,
  toggleSelectAllProducts,
  resetAddedProductsSlice,
  removeAllSelectedProducts
} = addToBasketSlice.actions;

export default addToBasketSlice.reducer;
