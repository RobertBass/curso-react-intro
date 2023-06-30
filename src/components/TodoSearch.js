import React from 'react';
import { Context } from './Context';
import '../styles/TodoSearch.css';

function TodoSearch (){
    const {searchValue, setSearchValue} = React.useContext(Context);

    return (
        <input 
            className="TodoSearch" 
            placeholder="Search To-do item"
            value={searchValue}
            onChange={(event) =>{
                setSearchValue(event.target.value); 
            }}
        />
    );
}

export { TodoSearch };