import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton(props) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        return props.setOpenModal(!props.openModal);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
