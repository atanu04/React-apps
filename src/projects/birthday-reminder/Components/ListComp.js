import React from "react";

import PersonComp from "./PersonComp";
function ListComp({ list }) {
  return (
    <>
      {list.map((person) => {
        return (
          <div key={person.id}>
            <PersonComp person={person} />
          </div>
        );
      })}
    </>
  );
}
export default ListComp;
