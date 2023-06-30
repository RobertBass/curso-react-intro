import React from "react";
import "../styles/NoContent.css";

function NoContent() {
  return (
    <div className='container'>
      <div className="info">
        <div className="info__title">No existe ese ToDo en la base de datos</div>
      </div>
    </div>
  );
}

export { NoContent };