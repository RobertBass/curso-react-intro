import React from 'react';
import '../styles/Head.css';

function Head({ children }){
    return (
        <div className="head-content">
            {children}
        </div>
    )
}

export { Head };