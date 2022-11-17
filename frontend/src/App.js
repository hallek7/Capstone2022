import React from 'react';
import './App.css';
//import { render } from "react-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Navigation from './component/Navigation';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Signup from './pages/Signup';
import Footer from './component/Footer';

function App() {
return(
  <BrowserRouter>
  <Navigation/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        
    </Routes>
    <Footer/>
  </BrowserRouter>
);
}

export default App;
