import React from 'react'
import './Card.css'

function Card() {

    return (

        <div className="card">
            <img className="image-card"
                 src="https://www.kolotrip.com/wp-content/uploads/2019/12/mejores-viajes-en-bicicleta.jpg"
                 alt="Mountain"/>
               <h5 className="card-title">Paseo en bicicleta por el Montseny</h5>
                <p className="card-text">Hermoso paseo en bicicleta por el increíble Parque Natural del Montseny.
                    Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos
                    y sorprendentes lugares.</p>
                <span className="card-text"><b>Precio:</b> 250€</span>
                <span className="card-text"><b>Duración:</b> 4h</span>
                <div className="botones">
                    <a href="#" className="btn">Edit</a>
                    <a href="#" className="btn">Delete</a>
                </div>

        </div>


    );
}

export default Card