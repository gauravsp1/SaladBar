import React from "react"
import TagLine from "./TagLine"

function NavBar(){
    return <header>
     <div id="navBar" className="navBar ">
        <img className="navImg " src="./images/logo.jpg"/>
        <ul className="navList">
        <li className="navItem">HOME</li>
            <li className="navItem">MENU</li>
            <li className="navItem"><a href="#location">LOCATION</a></li>
            <li className="navItem"><a href="#plan">SIGN UP</a></li>
        </ul>
        </div>
        
        <div>
        <TagLine/>
    </div>
    </header>
}

export default NavBar