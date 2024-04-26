import React from 'react'
import "./Navbar.css";
import logo from "../../assets/images/suitesail.png"
import {GiWorld} from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate=useNavigate();
  const goHome=()=>{navigate('/')};
  return (
    <div className='navbar'>
        <div className="navbar__Container">
            <div className="navbar__logo" onClick={goHome}>
              <img src={logo} alt="logo" />
            </div>
            <div className="navbar__contents">
                <span className="support">Support</span>
                <span className="language"><GiWorld className='language__icon'/> Language</span>
                <span className="propertyListing">List your property</span>
                <span className="login_register">
                    <button className="login">Login</button>
                    <button className="register">Register</button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar