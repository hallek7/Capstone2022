import React from 'react'
import './homepage.css';
import Header from "../../components/header/Header";
import Ads from  "../../components/ads/Ads";
import Sidenav from "../../components/sidenav/Sidenav";
 

function Homepage() {
  return (
    <> 
    <Header />
    <div className="home">
    <Ads/>
    <Sidenav/>
    </div>
    </>
  );
}

export default Homepage;