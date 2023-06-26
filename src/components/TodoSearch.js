import '../styles/TodoSearch.css';
function TodoSearch (){
    return (
        <input 
            className="TodoSearch" 
            placeholder="Insert To-do item"
            onChange={(event) =>{
                console.log(event.target.value);
            }}
        />
    );
}

export { TodoSearch };