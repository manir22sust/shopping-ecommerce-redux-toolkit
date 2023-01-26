import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/ApiURL";
import { STATUS } from "../utils/status";
const initialCategories = { data: [], status: STATUS.IDLE };

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategories,
  reducers: {
    setCategories(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setCategories, setStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;

export const fetchCategories = () => {
  return async function fetchCategoriesThunk(dispatch) {
    try {
      const response = await fetch(`${BASE_URL}/categories`);
      const data = await response.json();
      dispatch(setCategories(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
