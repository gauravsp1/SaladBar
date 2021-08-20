import React from 'react'
import { toast } from 'react-toastify';
import MenuNavBar from "./MenuNavBar";
import Plan from './Plan';

function Order(props) {
    const plan = props?.location?.state?.title
    const price = props?.location?.state?.price
console.log("Plan",plan);
function payAmount(){
toast.success("Amount Payed")
}
    return (
        <>
            <MenuNavBar />
           <div className="Order">
                    <h1>Meal plan selected {plan}</h1>
                    <h3>Amount to be paid</h3>
                    <h3>₹{price}</h3>
                    <button className="payButton" onClick={payAmount}>Pay</button>
                </div>
        </>
    )
}

export default Order
