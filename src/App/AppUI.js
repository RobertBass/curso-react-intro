import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoSearch } from '../components/TodoSearch';

function AppUI ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    filter,
    completeTodo,
    deleteTodo
}) {
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

export { AppUI };