import React from 'react'
import './Card.css'

function ExperienceDetail({experience}) {


    return (

        <div className="experienceDetail">
            <img className="image-card" src={experience.imgUrl}/>
            <h1 className="card-title">{experience.name}</h1>
            <p className="card-text"><b>Descripción: </b>{experience.descripcion}</p>
            <div className="botones">
                <button  className="btn">More info</button>
            </div>
            <span className="card-text"><b>Claves:</b> {experience.category}</span>
            <span className="card-title"><b>Duración:</b> {experience.time} h.</span>
            <span className="card-title"><b>Precio:</b> {experience.price} €</span>
            <div className="botones">
                <button className="btn">Reserva</button>

            </div>
        </div>

    );
}

export default ExperienceDetail