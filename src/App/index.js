import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoSearch } from "../components/TodoSearch";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { Empty } from "../components/Empty";
import { Modal } from "../components/Modal";
import { Form } from "../components/Form";
import { useTodos } from "./useTodos";
import { NoContent } from "../components/NoContent";
import { Head } from "../components/Head";
import { MainContent } from "../components/MainContent";
import "../styles/App.css";

//*************************************************************************** */

function App() {
  const {
    loading,
    error,
    filter,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
      <Head>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </Head>

      <MainContent>
        <TodoList>
          {error && <Error />}
          {loading && <Loading />}
          {loading && !totalTodos.length && !filter.length && <Empty />}
          {!totalTodos.length && !filter.length && <NoContent />}

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
      </MainContent>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <Form addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export default App;
