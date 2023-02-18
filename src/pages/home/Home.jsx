import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { Category } from "../category/Category";
import { Categories } from "../../components/categories/Categories";
import { Products } from "../../components/products/Products";

import { fetchProducts } from "../../store/productsSlice";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../../store/categoriesSlice";

import { Slider } from "../../components/slider/Slider";

import "./Home.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const { data: products, status: ProductStatus } = useSelector(
    (state) => state.product
  );
  const { data: categories, status: categoryStatus } = useSelector(
    (state) => state.category
  );
  const { catProductAll: productsByCategory, catProductAllStatus } =
    useSelector((state) => state.category);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, "all"));
    dispatch(fetchProductsByCategory(2, "all"));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <Slider />
      <Categories categories={categories} status={categoryStatus} />
      <Products products={products} status={ProductStatus} />
    </div>
  );
};
