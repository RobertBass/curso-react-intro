import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter(props) {
  if (props.totalTodos >= 1 && props.completedTodos < props.totalTodos) {
    return (
      <h1 className="TodoCounter">
        <p>
          Has completado
          <span> {props.completedTodos} </span>
          de
          <span> {props.totalTodos} </span>ToDo's
        </p>
      </h1>
    );
  } else if (props.totalTodos === 0) {
    return (
      <h1 className="TodoCounter">
        <span>No tienes ningun ToDo ingresado</span>
      </h1>
    );
  } else if (props.completedTodos === props.totalTodos) {
    return (
      <h1 className="TodoCounter">
        <span>Has completado todos tus ToDo's 🥳</span>
      </h1>
    );
  }
}

export { TodoCounter };
