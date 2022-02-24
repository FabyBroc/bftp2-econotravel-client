import React from 'react'
import './Card.css'
import  "./ExperienceDetail";
import {NavLink as Link, Route, Routes} from "react-router-dom"
import ExperienceCatalog from "./ExperienceCatalog";
import About from "./About";
import FormAdd from "./FormAdd";
import ExperienceDetail from "./ExperienceDetail";


function Card({experience, ExperienceDetail}) {

    return (

            <div className="card">
                <img className="image-card" src={experience.imgUrl}/>
                <h1 className="card-title">{experience.name}</h1>
                <p className="card-text"><b>Descripción: </b>{experience.descripcionCorta}</p>
                <div className="botones">
                    <Link  className="btn"  to="/moreInfo" element={<ExperienceDetail/>} >More Info</Link>
                </div>
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