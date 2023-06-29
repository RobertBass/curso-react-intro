import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import '../styles/App.css';

//*************************************************************************** */

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  const [searchValue, setSearchValue] = React.useState('');
  const filter = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  }

  return(
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filter={filter}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
