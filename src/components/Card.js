import React from 'react'
import './Card.css'

function Card(experience) {


    return (

        <div className="card">
            <h1>{experience.name}</h1>
        </div>


    );
}

export default Card