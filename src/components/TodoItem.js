import '../styles/TodoItem.css';
import { PiCheckFatDuotone } from 'react-icons/pi';
import { AiFillDelete } from 'react-icons/ai';

function TodoItem({text, completed, onComplete, onDelete}){
    return(
      <li className="TodoItem">
        <span 
        className={`Icon Icon-check 
        ${completed && "Icon-check--active"}`}
        onClick={onComplete}
        ><PiCheckFatDuotone /></span>
        
        <p 
        className={`TodoItem-p 
        ${completed && "TodoItem-p--complete"}`}
        >{text}</p>
        
        <span 
        className="Icon Icon-delete"
        onClick={onDelete}
        ><AiFillDelete /></span>

      </li>
    );
  }

  export { TodoItem };