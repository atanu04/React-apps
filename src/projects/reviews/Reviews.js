import React, { useState } from "react";
import people from "./data";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { ImEvil2 } from "react-icons/im";
function Reviews() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const upward = () => {
    const newIndex = (index + 1) % people.length;
    setIndex(newIndex);
  };
  const downward = () => {
    const newIndex = (index - 1 + people.length) % people.length;
    setIndex(newIndex);
  };
  const randomward = () => {
    const newIndex = Math.floor(Math.random() * people.length);
    setIndex(newIndex);
  };
  return (
    <div className="reviews">
      <div className="imageContainer">
        <img src={image} alt={id} className="pImage" />
        <ImEvil2 className="icon" />
      </div>

      <h3>{name}</h3>
      <h5>{job}</h5>
      <p>{text}</p>
      <div className="button">
        <button className="btn" onClick={downward}>
          <BiChevronLeft />
        </button>
        <button className="btn" onClick={upward}>
          <BiChevronRight />
        </button>
      </div>
      <button className="ranbtn" onClick={randomward}>
        Random
      </button>
    </div>
  );
}

export default Reviews;
