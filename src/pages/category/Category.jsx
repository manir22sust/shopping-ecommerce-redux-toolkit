import React, { useEffect } from "react";
import { Products } from "../../components/products/Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../../store/categoriesSlice";
import { useParams, Link } from "react-router-dom";

import "./Category.scss";

export const Category = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { catProductSingle: products, catProductSingleStatus: status } =
    useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchProductsByCategory(id, "single"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="category-page">
      <div className="container">
        <div className="breadcrumb">
          <ul className="breadcrumb-items flex">
            <li className="breadcrumb-item">
              <Link to="/">
                <i className="fas fa-home"></i>
                <span className="breadcrumb-separator">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </Link>
            </li>
            <li>
              Category
              <span className="breadcrumb-separator">
                <i className="fas fa-chevron-right"></i>
              </span>
            </li>
            <li>{products[0] && products[0].category.name}</li>
          </ul>
        </div>
      </div>
      <Products products={products} status={status} />
    </div>
  );
};
