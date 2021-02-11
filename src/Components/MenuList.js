import React from "react"

function MenuList(props){
return <>
<div className="menuListContainer">
<h1>{props.index}. {props.name}</h1>
<img src={props.source}/>
<h4>Ingredients</h4>
<ul>
    <li>{props.ingredient1}</li>
    <li>{props.ingredient2}</li>
    <li>{props.ingredient3}</li>
    <li>{props.ingredient4}</li>
</ul>

</div>

</>

}

export default MenuList