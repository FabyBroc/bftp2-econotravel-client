import React from 'react'
import './NavBar.css'
import {Link} from "react-router-dom";



function NavBar () {

    return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="end-nav">
                <button className="btn-add" to="/add">Add new +</button>
                <input className="seach" placeholder="Search" />
            </div>
        </div>
        )
}

export default NavBar