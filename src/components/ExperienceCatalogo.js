import React from 'react'
import './Card.css'


function ExperienceCatalogo () {
    return (
    <div className="card">
        <img className="image-card"
            src="https://images.pexels.com/photos/10320658/pexels-photo-10320658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Mountain" />
            <div className="card-body">
                <h5 className="card-title">Highland</h5>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi
                    eaque officia, sit
                    modi distinctio similique accusantium ut repellendus voluptate?</p>
                <a href="#" className="btn" >Mountain View</a>
            </div>
    </div>
    );

}

export default ExperienceCatalogo
