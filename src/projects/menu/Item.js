import React from "react";

function item({ id, title, category, price, img, desc }) {
  return (
    <article className="item">
      <img src={img} alt={id} className="photo" />
      <div className="item-info">
        <header>
          <h1>{title}</h1>
          <h3 className="price">$ {price}</h3>
        </header>

        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
}

export default item;
