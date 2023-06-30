import React from "react";
import { Context } from "./Context";
import "../styles/TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(Context);

  if (totalTodos >= 1 && completedTodos < totalTodos) {
    return (
    <h1 className="TodoCounter">
      Has completado
      <span> {completedTodos} </span>
      de
      <span>{totalTodos}</span> ToDo's
    </h1>
    )
  } else if (totalTodos === 0) {
    return <h1 className="TodoCounter">No tienes ningun ToDo ingresado</h1>
  } else if (completedTodos === totalTodos) {
    return <h1 className="TodoCounter">Has completado todos tus ToDo's 🥳</h1>
  } 
}

export { TodoCounter };
