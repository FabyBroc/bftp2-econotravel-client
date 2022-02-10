import React from 'react'
import './Card.css'

function Card({experience}) {


    return (

            <div className="card">
                <img className="image-card" src={experience.imgUrl}/>
                <h1 className="card-title">{experience.name}</h1>
                <p className="card-text">Descripción: {experience.descripcion}</p>
                <span className="card-text"><b>Claves:</b> {experience.category}</span>
                <span className="card-title"><b>Duración:</b> {experience.time} h.</span>
                <span className="card-title"><b>Precio:</b> {experience.price} €</span>
                <div className="botones">
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
                </div>
            </div>

    );
}

export default Card