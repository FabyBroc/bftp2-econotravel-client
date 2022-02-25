import React from 'react'
import './Card.css'
import "./ExperienceDetail";
import {Link} from "react-router-dom";

function Card({experience, editExperience, deleteExperience}) {

    return (

        <div className="card">
            <img className="image-card" src={experience.imgUrl}/>
            <h1 className="card-title">{experience.name}</h1>
            <p className="card-text"><b>Descripción: </b>{experience.descripcion}</p>
            <span className="card-text"><b>Claves:</b> {experience.category}</span>
            <span className="card-title"><b>Duración:</b> {experience.time} h.</span>
            <span className="card-title"><b>Precio:</b> {experience.price} €</span>
            <div className="botones">
                <button className="btn-orange editar">
                    <Link className="btn" to="/add"
                          state={{data: experience}}>Editar</Link>
                </button>
                <button className="btn" onClick={() => deleteExperience(experience.id)}>Delete</button>
            </div>


        </div>


    );
}

export default Card