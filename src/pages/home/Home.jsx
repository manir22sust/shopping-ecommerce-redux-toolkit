import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "../category/Category";
import { Products } from "../../components/products/Products";

import { fetchProducts } from "../../store/productsSlice";
import { fetchCategories } from "../../store/categoriesSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);
  const { data: categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <Category categories={categories} />
      <Products products={products} />
    </div>
  );
};
