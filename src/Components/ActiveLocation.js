import React from "react"

function ActiveLocation(props){
    return<div className="activeLocationItem">
        <img className="city" src={props.source}/>
        <h4>{props.title}</h4>
        <p><img src="./images/person.png"/>{props.eater}</p>
        <p><img src="./images/star.png"/>{props.star}</p>
        <p><img src="./images/insta.png"/><a href="#">{props.tag}</a></p>
    </div>
}

export default ActiveLocation;