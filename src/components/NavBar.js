import React from 'react'
import './NavBar.css'
import {Link} from "react-router-dom";



function NavBar () {

    return (
        <div className="nav">
            <ul>
                <li><a href=" ">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
        )
}

export default NavBar