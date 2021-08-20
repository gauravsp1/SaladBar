import React from "react"
import { useHistory } from "react-router-dom";

function PlanContainer(props) {
    const history = useHistory();

    function handleOrder(params) {
        console.log("Pushed");
        history.push({
            pathname: "/order",
            state: {
                title: params.title,
                price: params.price
            }
        })
    }

    return <div className="planBox">
        <div className="boxTop">
            <h4>{props.title}</h4>
            <h4> &#x20b9; {props.price}</h4>
            <h5>{props.pricedesc}</h5>
        </div>
        <div className="boxMid">
            <ul class="boxMidList">
                <li>{props.list}</li>
                <li>24/7 delivery</li>
                <li>Premium menu</li>
                <li>Free delivery</li>
            </ul>
        </div>
        <div className="boxBottom">
            <button onClick={() => handleOrder(props)} type="submit">Order Now!</button>
        </div>
    </div>
}

export default PlanContainer;