import React from 'react'
import { toast } from 'react-toastify';
import MenuNavBar from "./MenuNavBar";
import Plan from './Plan';

function Order(props) {
    const plan = props?.location?.state?.title
    const price = props?.location?.state?.price

function payAmount(){
toast.success("Amount Payed")
}
    return (
        <>
            <MenuNavBar />
           
                {plan ? (<div className="Order">
                    <h1>Meal plan selected {plan}</h1>
                    <h3>Amount to be paid</h3>
                    <h3>₹{price}</h3>
                    <button className="payButton" onClick={payAmount}>Pay</button>
                </div>
                ) : (
                    <Plan />
                )}
           


        </>
    )
}

export default Order
