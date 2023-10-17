import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  searchTerm: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProductsByCategory: (state, action) => {
      const category = action.payload;
      console.log(category)
      state.filteredProducts = state.products.filter((product) => {
        if(product.category === category) {
          return product
        }
      });
      if (category === "all") {
        state.filteredProducts = state.products;
      }
    },
    searchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchTerm = searchTerm;
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
    },
    resetAddedProducts: (state) => {
      state.addedProducts = [];
    },
  },
});

export const {
  setProducts,
  filterProductsByCategory,
  searchProducts,
  resetAddedProducts,
} = productSlice.actions;

export default productSlice.reducer;
