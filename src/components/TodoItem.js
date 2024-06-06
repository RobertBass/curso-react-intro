import "../styles/TodoItem.css";
import { PiCheckFatDuotone } from "react-icons/pi";
import { AiFillDelete } from "react-icons/ai";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check 
        ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <PiCheckFatDuotone />
      </span>

      <p
        className={`TodoItem-p 
        ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.text}
      </p>

      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <AiFillDelete />
      </span>
    </li>
  );
}

export { TodoItem };
