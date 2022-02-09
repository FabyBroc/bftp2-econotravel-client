import React, {useState} from 'react'
import Card from "./Card";





 function ExperienceCatalog ({experiences}) {


         return (
             <div >
                 {experiences.map(experience => <Card experience={experience} key={experience.id} /> )}
             </div>

         )


 }
export default ExperienceCatalog


