import React from "react";

function List({ items, removeItem, editItem }) {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        return (
          <article key={item.id} className="grocery-item">
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(item.id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                Delete
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
