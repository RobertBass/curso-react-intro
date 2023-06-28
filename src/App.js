import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import './styles/App.css';

function useLocalStorage(itemName, initialValue){
  
  const storagedItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!storagedItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(storagedItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem]
}

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

  return (
    <>
      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {filter.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    </>
  );
}

export default App;
