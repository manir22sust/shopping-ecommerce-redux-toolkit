import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/ApiURL";
import { STATUS } from "../utils/status";
const initialProducts = { data: [], status: STATUS.IDLE };

export const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productsSlice.actions;
export default productsSlice.reducer;

export const fetchProducts = () => {
  return async function fetchProductsThunk(dispatch) {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const data = await response.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
