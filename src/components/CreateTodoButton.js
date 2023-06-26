import '../styles/CreateTodoButton.css';

function CreateTodoButton(){
    return (
        <button 
            className="CreateTodoButton"
            onClick={(event) => {
                console.log('Diste Click');
                console.log(event);
                console.log(event.target);
            }}>
        +
        </button>
    );
}

export { CreateTodoButton };