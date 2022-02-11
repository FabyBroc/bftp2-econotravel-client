import React from 'react'
import './NavBar.css'
import {Link} from "react-router-dom";



function NavBar () {

    return (
        <div className="nav">
            <ul>
<<<<<<< HEAD
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About us</Link></li>
=======
                <li><a href=" ">Home</a></li>
                <li><a href="#about">About</a></li>
>>>>>>> 2fc14132e999503d42febd8479d32a4694e04d65
            </ul>
        </div>
        )
}

export default NavBar