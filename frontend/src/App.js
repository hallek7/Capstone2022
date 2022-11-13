import React from 'react';
import './App.css';
//import { render } from "react-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Navigation from './component/Navigation';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

function App() {
return(
  <BrowserRouter>
  <Navigation/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
);
}

export default App;
