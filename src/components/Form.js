import React from "react";
import "../styles/Form.css";

function Form(props) {
  const [newTodo, setNewTodo] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.addTodo(newTodo);
    props.setOpenModal(false);
  };

  const onCancel = () => {
    props.setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escrbe tu nuevo ToDo</label>
      <textarea
        placeholder="Escribe aqui el ToDo"
        value={newTodo}
        onChange={onChange}
      />
      <div className="Form-buttonContainer">
        <button
          type="button"
          className="Form-button Form-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="Form-button Form-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { Form };
