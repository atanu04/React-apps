import React from "react";

function Categories({ categories, filterItem }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="btn"
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
