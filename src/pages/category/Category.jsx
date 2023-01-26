import React from "react";

export const Category = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <img src={category.image} alt="" />
            <h6>{category.name} </h6>
          </div>
        );
      })}
    </div>
  );
};
