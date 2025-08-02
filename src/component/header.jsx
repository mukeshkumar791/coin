import React from "react";
import logo from"../img/logo.png"
import toggle from"../img/toggal.png"
import './Header.css'
function Header
(){
    return(
<div className="container">
    <div className="navbar-main">
        <div className="main-nav">
        <div>
<img src={logo} alt="" />
</div>
<div>
    <ul className="ul-list">
        <li>Home</li>
        <li>Page</li>
        <li>Roadmap</li>
        <li>Team</li>
    </ul>
</div>
<div>
    <button id="signin">sign in</button>
</div>
      <input className="jj" type="checkbox" id="menu-toggle"/>
                    <label for="menu-toggle" class="menu-icon"><img src={toggle} alt=""/></label>
                    <nav class="menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">PAGE</a></li>
                            <li><a href="#">ROADMAP</a></li>
                            <li><a href="#">TEAM</a></li>
                            <li> <button class="signin">SIGN IN</button></li>
                        </ul>
                    </nav>





</div>
</div>
</div>
    )
}
export default Header;
                  