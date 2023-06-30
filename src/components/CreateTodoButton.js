import React from 'react';
import '../styles/CreateTodoButton.css';
import { Context } from './Context';

function CreateTodoButton(){
    const {openModal, setOpenModal} = React.useContext(Context);
    
    return (
        <button 
            className="CreateTodoButton"
            onClick={()=>{
                return setOpenModal(!openModal)

            }}
        >
        +
        </button>
    );
}

export { CreateTodoButton };