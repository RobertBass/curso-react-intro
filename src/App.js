import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import './styles/App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Tomar curso de ReactJS', completed: false},
  {text: 'Lavar el carro', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter completed={3} total={5} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    </>
  );
}

export default App;
