import React from "react";
import Item from "./Item";
function Menu({ items }) {
  return (
    <div className="menu-container">
      {items.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
}

export default Menu;
