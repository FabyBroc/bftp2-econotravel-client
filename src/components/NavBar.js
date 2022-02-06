import React from 'react'
import './NavBar.css'
import { Nav } from "rsuite";


function NavBar () {

    return (
        <Nav className="nav">
            <Nav.Item className="home" href="/" >Home</Nav.Item>
            <Nav.Item className="add" href="#">Añadir</Nav.Item>
            <Nav.Item className="search" href="#">Buscar</Nav.Item>
        </Nav>
        )
}

export default NavBar