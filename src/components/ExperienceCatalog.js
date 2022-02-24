import React, {useState} from 'react'
import Card from "./Card";
import './ExperienceCatalog.css'
import {NavLink as Link, Route} from "react-router-dom";
import ExperienceDetail from "./ExperienceDetail";




 function ExperienceCatalog ({experiences}) {


         return (

             <div className="container">
                 {experiences.map(experience => <Card experience={experience} key={experience.id}
                                                      element={<ExperienceDetail/>}
                     />


                 )}


             </div>

         )


 }
export default ExperienceCatalog


