import React, {useState} from 'react'
import Card from "./Card";
import './ExperienceCatalog.css'
import {NavLink as Link, Route} from "react-router-dom";
import ExperienceDetail from "./ExperienceDetail";




 function ExperienceCatalog ({experiences, deleteExperience, editExperience}) {


         return (

             <div className="container">
                 {experiences.map(experience => <Card experience={experience} key={experience.id}
                                                      element={<ExperienceDetail/>} deleteExperience={deleteExperience}
                                                      editExperience={editExperience}
                     />


                 )}


             </div>

         )


 }
export default ExperienceCatalog


