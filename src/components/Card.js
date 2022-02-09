import React from 'react'
import './Card.css'

function Card({experience}) {


    return (

        <div className="card">
            <img src={experience.imgUrl}/>
            <h1>{experience.name}</h1>
            <p>Descripción: {experience.descripcion}</p>
            <span>Duración: {experience.time}</span>
            <span>Precio: {experience.price}</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>


    );
}

export default Card