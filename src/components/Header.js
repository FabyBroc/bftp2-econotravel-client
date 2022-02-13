import React from "react";
import logo from './logo.png';




function Header(){

    return(
        <div className="color" >
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
        </div>

    )
}

export default Header