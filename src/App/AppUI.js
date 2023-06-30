import React from 'react';
import { TodoCounter } from "../components/TodoCounter";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoSearch } from "../components/TodoSearch";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { Empty } from "../components/Empty";
import { Modal } from '../components/Modal';
import { Form } from '../components/Form';
import { Context } from "../components/Context";
import { NoContent } from '../components/NoContent';


function AppUI() {
  const {
    loading,
    error,
    filter,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos
  } = React.useContext(Context);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <Context.Consumer>
        {() => (
          <TodoList>
            {loading && <Loading />}
            {error && <Error />}
            {!loading && totalTodos === 0 && <Empty />}
            {totalTodos >= 1 && filter.length === 0 && <NoContent />}
            

            {filter.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </Context.Consumer>

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <Form/>
        </Modal>
      )}
    </>
  );
}

export { AppUI };
