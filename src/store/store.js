import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";
const store = configureStore({
  reducer: {
    product: productsReducer,
    category: categoriesReducer,
  },
});

export default store;
