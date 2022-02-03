import React from 'react'
import './NavBar.css'
import { Nav } from 'rsuite';

 function Navbar() {

    return (

        <Nav className="nav">
            <Nav.Item className="home" href="/" >Home</Nav.Item>
            <Nav.Item className="add" href="#">Añadir</Nav.Item>
            <div className="buscador">
                <Nav.Item className="search" href="#">Buscar</Nav.Item>
            </div>
        </Nav>
    )
}

export default Navbar