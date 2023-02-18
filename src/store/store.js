import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";
import modalReducer from "./modalSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    product: productsReducer,
    category: categoriesReducer,
    modal: modalReducer,
    cart: cartReducer,
  },
});

export default store;
