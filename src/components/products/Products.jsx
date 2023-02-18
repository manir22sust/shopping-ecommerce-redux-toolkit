import React from "react";

export const Products = ({ products }) => {
  return (
    <div>
      {products.slice(0, 2).map((product) => {
        return (
          <div key={product.id}>
            <img src={product.images[0]} alt="" />
            <p> {product.category.name}</p>
          </div>
        );
      })}
    </div>
  );
};
