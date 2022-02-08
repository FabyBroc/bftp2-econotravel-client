import React from 'react'
import Card from "./Card.js";

<<<<<<< HEAD:src/components/ExperienceCatalogo.js


 function ExperienceCatalogo (experiences, addExperience) {

=======
 function ExperienceCatalog () {
>>>>>>> f649338b4c8af62369835f4092856aaa1166c735:src/components/ExperienceCatalog.js
     return (

         <div className="expCatalogo" >
             {experiences.map(experience => <p>{experience.name}</p>)}
        </div>

     )

 }

export default ExperienceCatalog


