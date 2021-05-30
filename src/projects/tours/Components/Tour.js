import React from "react";

function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <article className="Tour">
      <img src={image} alt="tour" />
      <div className="head">
        <h3>{name}</h3>
        <h3 className="tourPrice">${price}</h3>
      </div>
      <div className="tourInfo">
        <p>
          {readMore ? info : `${info.substring(0, 200)}.....`}
          <button className="read" onClick={() => setReadMore(!readMore)}>
            {readMore ? " Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <button className="btn" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </article>
  );
}

export default Tour;
