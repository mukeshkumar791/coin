import React from "react";
import '../component/Footer.css'
import logo from"../img/logo.png"
function Footer(){
    return(
        <>
        <div className="container">
            <div className="footer-main">
<div>
    <div>
<img src={logo} alt="" /></div>

<div>
    <img src="" alt="" />
</div>



</div>

<div className="footer-list">
    <ul>
        <li>what is ico</li>
        <li>tokens</li>
        <li>roadmap</li>
    </ul>
    <ul>
        <li>ico Apps</li>
        <li>Whitepaper</li>
        <li>Teams</li>
    </ul>
    <ul>
        <li>Join Us</li>
        <li>Contact</li>
        <li>Faq</li>
    </ul>
</div>

<div>
<input type="text" placeholder="enter you email" />
<button>subsceibe</button>
</div>


         </div>
        </div>
        </>
    )
}
export default Footer;