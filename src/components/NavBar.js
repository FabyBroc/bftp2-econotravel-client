import React from 'react'
import './NavBar.css'
import {Link} from "react-router-dom";
import './About.js'

function NavBar() {

    return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="end-nav">
                <Link className="btn-add" to="/add">Add new</Link>
                <input className="search" placeholder="Search" />
            </div>
        </div>
    )
}

export default NavBar