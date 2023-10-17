import { configureStore } from "@reduxjs/toolkit";
import addToBasketReducer from "./addToBasketReducer";
import buyNowReducer from "./buyNowReducer";
import ordersReducer from "./ordersReducer";
import productReducer from "./productReducer";
import selectedProductsReducer from "./selectedProductsReducer";

const store = configureStore({
  reducer: {
    addToBasket: addToBasketReducer,
    buyNow: buyNowReducer,
    orders: ordersReducer,
    product: productReducer,
    selectedProducts: selectedProductsReducer,
  },
});

export default store;
