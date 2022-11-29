import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
  // if user is already logged in 
  const user = true;
return (

<div className="top">
<div className="topLeft">
<i className="topIcon fab fa-facebook-square"></i>
<i className="topIcon fab fa-instagram-square"></i>
<i className="topIcon fab fa-pinterest-square"></i>
<i className="topIcon fab fa-twitter-square"></i>
</div>

<div className="topCenter">
    <ul className="topList">

      <li className="topListItem">
      <Link className="link" to="/"> HOME </Link>  </li>

      <Link className="link"> 
      <li className="topListItem">ABOUT  </li> </Link>

      <Link className="link"> 
      <li className="topListItem">CONTACT  </li>  </Link>
  
      <li className="topListItem">
      <Link className="link" to="/write"> WRITE </Link> </li>
      <li className="topListItem"> {user && "LOGOUT" } </li>
    </ul>
  </div>

  <div className="topRight">
  {user ? (
  <Link className="link" to="/profileSetting"> 
  <img className="topImg"
  src="https://etc.usf.edu/techease/wp-content/uploads/2017/12/daylily-flower-and-buds-sharp.jpg" alt="tt"/>
 </Link>
  ):

  (
<ul className="topList">
  
        <li className="topListItem">  
        <Link className="link" to="/login">
         LOGIN  </Link> </li>
        
        <li className="topListItem">   
        <Link className="link" to="/register">
         REGISTER </Link> </li>
        </ul>
  )}
        <i className="topSearchIcon fas fa-search"></i>
    </div>
</div>
);
}

export default Navbar;