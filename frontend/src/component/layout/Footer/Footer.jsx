import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"

function Footer() {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>Download Our App</h4>
            <p>Download App for Android and IOS mobile Phone</p>
            <img src={playStore} alt='playStore'/>
            <img src={appStore} alt='appStore'/>
        </div>
        <div className="midFooter">
            <h1>ECOMMERCE.</h1>
            <p>High Quality is our first priority</p>

            <p>Copyrights 2024 &copy; BuyDigital</p>
        </div>
        <div className="rightFooter">
            <h4>Follow us</h4>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
            <a href="#">Facebook</a>
        </div>
    </footer>
  )
}

export default Footer
