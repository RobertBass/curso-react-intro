import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch ({searchValue, setSearchValue}){
    

    return (
        <input 
            className="TodoSearch" 
            placeholder="Insert To-do item"
            value={searchValue}
            onChange={(event) =>{
                setSearchValue(event.target.value);
                
            }}
        />
    );
}

export { TodoSearch };