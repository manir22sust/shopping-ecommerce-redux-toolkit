import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/ApiURL";
import { STATUS } from "../utils/status";

const initialCategories = {
  data: [],
  status: STATUS.IDLE,
  catProductAll: [],
  catProductAllStatus: STATUS.IDLE,
  catProductSingle: [],
  catProductSingleStatus: STATUS.IDLE,
};

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

    setCategoriesProductAll(state, action) {
      state.catProductAll.push(action.payload);
    },
    setCategoriesStatusAll(state, action) {
      state.catProductAllStatus = action.payload;
    },
    setCategoriesProductSingle(state, action) {
      state.catProductSingle = action.payload;
    },
    setCategoriesStatusSingle(state, action) {
      state.catProductSingleStatus = action.payload;
    },
  },
});

export const {
  setCategories,
  setStatus,
  setCategoriesProductAll,
  setCategoriesStatusAll,
  setCategoriesProductSingle,
  setCategoriesStatusSingle,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;

export const fetchCategories = () => {
  return async function fetchCategoriesThunk(dispatch) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await fetch(`${BASE_URL}/categories`);
      const data = await response.json();
      dispatch(setCategories(data.slice(0, 5)));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};

export const fetchProductsByCategory = (categoryID, dataType) => {
  return async function fetchCategoryProductThunk(dispatch) {
    if (dataType === "all") dispatch(setCategoriesStatusAll(STATUS.LOADING));
    if (dataType === "single")
      dispatch(setCategoriesStatusSingle(STATUS.LOADING));

    try {
      const response = await fetch(
        `${BASE_URL}/categories/${categoryID}/products`
      );
      const data = await response.json();

      if (dataType === "all") {
        dispatch(setCategoriesProductAll(data.slice(0, 10)));
        dispatch(setCategoriesStatusAll(STATUS.IDLE));
      }

      if (dataType === "single") {
        dispatch(setCategoriesProductSingle(data.slice(0, 20)));
        dispatch(setCategoriesStatusSingle(STATUS.IDLE));
      }
    } catch (error) {
      dispatch(setCategoriesStatusAll(STATUS.ERROR));
    }
  };
};
