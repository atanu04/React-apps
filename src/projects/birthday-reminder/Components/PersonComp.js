import React from "react";

function PersonComp({ person }) {
  return (
    <div className="person">
      <img src={person.image} alt="person"></img>
      <h2>
        {person.name} ({person.age})
      </h2>
      <p></p>
      <h3>{person.dob}</h3>
    </div>
  );
}
export default PersonComp;
