import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch(props) {
  return (
    <input
      className="TodoSearch"
      placeholder="Search To-do item"
      value={props.searchValue}
      onChange={(event) => {
        props.setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
