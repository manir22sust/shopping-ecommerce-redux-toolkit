import React from "react";

export const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
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
