import React, {useState} from 'react'
import Card from "./Card";
import './ExperienceCatalog.css'




 function ExperienceCatalog ({experiences}) {


         return (

             <div className="container">
                 {experiences.map(experience => <Card experience={experience} key={experience.id}/> )}


             </div>

         )


 }
export default ExperienceCatalog


