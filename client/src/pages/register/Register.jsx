import { useState } from "react";
import "./register.css";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
 
 
function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault();
   
  }
  return (
<div className="register">
<span className="registerTitle">Register</span>
<form className="registerForm" onSubmit={handleSubmit}>

<label>Username</label>
<input className="registerInput" type="text" placeholder="Enter username..." 
onChange={e=>setUsername(e.target.value)}
/>

<label>Email</label>
<input className="registerInput" type="text" placeholder="Enter your email..." 
onChange={e=>setEmail(e.target.value)}/>

<label>Password</label>
<input className="registerInput" type="password" placeholder="Enter your password..." 
onChange={e=>setPassword(e.target.value)}/>
<button className="registerButton" type="submit">Register</button>
</form>

<button className="registerLoginButton">
<Link className="link"  to="/login"> Click to Login </Link>
</button>
 
</div>
  )
}

export default Register