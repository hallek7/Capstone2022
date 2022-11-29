import React from 'react';
import "./register.css";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
function Register() {
  return (
<div className="register">
<span className="registerTitle">Register</span>
<form className="registerForm">

<label>Username</label>
<input className="registerInput" type="text" placeholder="Enter username..." />

<label>Email</label>
<input className="registerInput" type="text" placeholder="Enter your email..." />

<label>Password</label>
<input className="registerInput" type="password" placeholder="Enter your password..." />
<button className="registerButton">Register</button>
</form>

<button className="registerLoginButton">
<Link className="link"  to="/login"> Click to Login </Link>
</button>
 
</div>
  )
}

export default Register