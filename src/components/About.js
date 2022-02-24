import React from "react";
import chica from "../components/assets/chica.png";
import './About.css'


function About() {

    return (
        <div className="aboutUs">

            <div className="titulo">
                <h1>Sobre Nosotros</h1>
            </div>

            <div className="imagen">
                <img src={chica} alt="imatge-chica"/>
                <h5>Marina Herrán, fundadora de Econotravel</h5>
            </div>


            <div className="mision">
                <span>
                     <h2>Misión</h2>
Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña.

Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.
               </span>

            </div>

            <div className="contacto">
                <span>

                <h2>Contacto</h2>
          <ul  className="contacto">
          <li>Teléfono: 93 123 45 67</li>
          <li>Correo: info@econotravel.com</li>
              <li>Dirección: Carrer dels Viatgers, 28, 08001 Barcelona</li>

          </ul>

            </span>

            </div>


        </div>


    )
}


export default About

