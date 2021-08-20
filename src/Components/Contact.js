import React, { useState } from "react"
import {toast } from 'react-toastify';

function Contact() {

const [feedBack,setFeedBack]=useState({
    name:"",
    email:"",    
    message:"",
})

function changeHandler(e){
let name=e.target.name
let value=e.target.value

setFeedBack((previous)=>{
return {
    ...previous,
    [name]:value
}
}
)


}
function Submit(e){
if(!feedBack.name || !feedBack.email || !feedBack.message){
    toast.error("Fill all fields")
}
else{
    setFeedBack({
        name:"",
        email:"",
        message:"",
    })
    toast.success("Thank you for your Feedback")
}
  

}

    return <div className="contactContainer">
        <div className="contact">
            <h2>CONTACT US</h2>
        </div>
        <div className="contactForm">
            <div>
                <label className="namelable" for="name">Name</label>
                <input className="name" type="text" onChange={(e)=>{changeHandler(e)}} value={feedBack.name} name="name" placeholder="Your name" required />
            </div>
            <div>
                <label className="emaillable" for="name">Email</label>
                <input className="email" type="email"onChange={(e)=>{changeHandler(e)}} value={feedBack.email} name="email" placeholder="Your email" required />
            </div>
            <div>
                <label className="find-uslable" for="find-us">How did you find us?</label>
                <select className="find-us" name="find-us">
                    <option value="friends" selected>Friends</option>
                    <option value="advertising">Advertising</option>
                    <option value="google">Google</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label className="newslable">Subscribe to our newsletter?</label>
                <input className="news" type="checkbox" name="news" />
            </div>
            <div>
               
                <textarea className="textarea" onChange={(e)=>{changeHandler(e)}} value={feedBack.message} name="message" placeholder="Your message..." />
            </div>
            <div>
                <button className="contactButton" type="submit" onClick={Submit}>Send it!</button>
            </div>

        </div>
    </div>


}

export default Contact;