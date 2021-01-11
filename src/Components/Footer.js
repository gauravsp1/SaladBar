import React from "react"

function Footer() {
    return <div className="footer">
        <ul class="footer-nav">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">iOS App</a></li>
            <li><a href="#">Android App</a></li>
        </ul>
        <ul class="footer-icon">
            <li><a href="#"><img src="./images/fb.png"/></a></li>
            <li><a href="#"><img src="./images/insta.png"/></a></li>
            <li><a href="#"><img src="./images/whatsapp.png"/></a></li>
            <li><a href="#"><img src="./images/twitter.png"/></a></li>
        </ul>

        <p>© 2020 Salad-Bar, Inc. All rights reserved.</p>
    </div>
}

export default Footer;