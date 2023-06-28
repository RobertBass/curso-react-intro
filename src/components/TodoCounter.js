import '../styles/TodoCounter.css';

function TodoCounter({completed, total}){
  if (total === 0) {
    return (
      <h1 
        className='TodoCounter'>No tienes ningun ToDo ingresado
      </h1>
    )
  } else if (completed === total) {
    <h1 
      className='TodoCounter'>Has completado todos tus TODOS 🥳
    </h1>
  } else {
    <h1 
      className='TodoCounter'>
      Has completado 
      <span> {completed} </span> 
      de 
      <span>{total}</span> TODOS
      </h1>
  }
}

  export { TodoCounter };