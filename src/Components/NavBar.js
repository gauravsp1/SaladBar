import React from "react"
import TagLine from "./TagLine"
import {NavLink} from "react-router-dom"

function NavBar(){
    return <header>
     <div id="navBar" className="navBar ">
        <img className="navImg " src="./images/logo.jpg"/>
        <ul className="navList">
            <li className="navItem"><NavLink to="/">HOME</NavLink></li>
            <li className="navItem"><NavLink to="/menu">MENU</NavLink></li>
            <li className="navItem">LOCATION</li>
            <li className="navItem">SIGN UP</li>
        </ul>
        </div>
        
        <div>
        <TagLine/>
    </div>
    </header>
}

export default NavBar