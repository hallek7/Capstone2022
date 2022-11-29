import React from 'react'
import "./eachpost.css"
import { Link } from "react-router-dom";

function Eachpost() {
return (
<div className="eachpost"> 
<div className="eachPostWrapper">
<img className="eachPostImg"
src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt ="eachImg"/>
<h1 className="eachPostTitle"> Lorem ipsum dolor 
<div className="eachPostEdit">
<i className="eachPostIcon far fa-edit"></i>
<i className="eacgPostIcon far fa-trash-alt"></i>
</div>
</h1>
<div className="eachPostInfo">
<span>Author: <b className="eachPostAuthor"> Halle </b> </span>
<span>1 day agoooooooooo</span>
</div>
<p className="eachPostDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
        quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
        Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
        eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
        error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
        impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
        odit modi eos! Lorem, ipsum dolor 
        <br />
        <br /> sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea </p>
</div>
</div>
);
}

export default Eachpost