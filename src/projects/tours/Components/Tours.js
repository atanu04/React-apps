import React from "react";
import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <div className="Tours">
      <div className="title">Our Tours</div>
      <div className="underline"></div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
