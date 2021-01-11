import React from "react"

function MenuImages(props){
    return <><div className="MenuImages">
        <img src={props.source}/>
        <p className="overlay"><em>{props.name}</em></p>
    </div></>
}

export default MenuImages;