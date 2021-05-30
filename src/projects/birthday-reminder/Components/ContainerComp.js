import data from "../data";
import ListComp from "./ListComp";
import React from "react";

function ContainerComp() {
  const [list, setList] = React.useState(data);
  return (
    <div>
      <h1>Birthday Reminder</h1>
      <ListComp list={list} />
      <button
        className="btn"
        onClick={() => {
          setList([]);
        }}
      >
        Clear
      </button>
      <button
        className="btn"
        onClick={() => {
          setList(data);
        }}
      >
        Reset
      </button>
    </div>
  );
}
export default ContainerComp;
