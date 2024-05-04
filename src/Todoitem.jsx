import React from "react";

function Todolist(props) {
  
  function handleClick() {}

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
export default Todolist;
