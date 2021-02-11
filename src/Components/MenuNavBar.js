import React from "react"
import {NavLink} from "react-router-dom"

function MenuNavBar(){
    return <>
    <div className="MenuNavBar">
    <img className="navImg " src="./images/logo.jpg"/>
        <ul className="navList">
            <li className="navItem"><NavLink to="/">HOME</NavLink></li>
            <li className="navItem"><NavLink to="/menu">MENU</NavLink></li>
            {/* <li className="navItem">LOCATION</li>
            <li className="navItem">SIGN UP</li> */}
        </ul>
        </div>
    </>

}


export default MenuNavBar