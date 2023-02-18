import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    product: productsReducer,
    category: categoriesReducer,
    modal: modalReducer,
  },
});

export default store;
