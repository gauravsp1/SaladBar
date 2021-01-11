import Reacr from "react"


function Contact() {
    return <div className="contactContainer">
        <div className="contact">
            <h2>CONTACT US</h2>
        </div>
        <form className="contactForm">
            <div>
                <label className="namelable" for="name">Name</label>
                <input className="name" type="text" name="name" placeholder="Your name" required />
            </div>
            <div>
                <label className="emaillable" for="name">Email</label>
                <input className="email" type="email" name="email" placeholder="Your email" required />
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
                {/* <label className="textarealable" for="name">Write to us!</label> */}
                <textarea className="textarea" name="message" placeholder="Your message..." />
            </div>
            <div>
                <button className="contactButton" type="submit">Send it!</button>
            </div>

        </form>
    </div>


}

export default Contact;