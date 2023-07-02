import React from 'react';
import '../styles/InfoContainer.css';

function Error(){
    return(
        <div className='container'>
      <div className="info">
        <div className="info__title">Error al cargar la informacion, contacta al Administrador</div>
      </div>
    </div>
    )
}

export { Error };