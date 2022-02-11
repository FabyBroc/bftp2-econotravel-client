import React from "react";
import {Link} from "react-router-dom";


function Footer(){

    return (
        <footer className="footer">
            <ul>
                <li>FemTech2022</li>
                <li><Link>Instagram</Link></li>
                <li><Link>Facebook</Link></li>
                <li><Link>Email</Link></li>
            </ul>
        </footer>
    );
}

export default Footer