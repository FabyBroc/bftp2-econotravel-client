import React from 'react'
import Card from "./Card.js";



 function ExperienceCatalogo (experiences, addExperience) {

     return (

         <div className="expCatalogo" >
             {experiences.map(experience => <p>{experience.name}</p>)}
        </div>

     )

 }

export default ExperienceCatalogo


