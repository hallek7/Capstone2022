import React from 'react'
import "./eachpost.css"
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";


function Eachpost() {
const location = useLocation()
const path = location.pathname.split("/")[2];
const [adv, setPost] = useState({})

useEffect(() => {
const getPost = async()=> {
const res = await axios.get("/ads/" + path);
setPost(res.data);
};
getPost();
}, [path]);

return (
<div className="eachpost"> 
<div className="eachPostWrapper">
{adv.pics && (
<img className="eachPostImg"
src={adv.pics} alt ="eachImg"/>
)}
 
<h1 className="eachPostTitle"> {adv.title}
<div className="eachPostEdit">
<i className="eachPostIcon far fa-edit"></i>
<i className="eacgPostIcon far fa-trash-alt"></i>
</div>
</h1>
<div className="eachPostInfo">
<span>Author: 
    <Link to={`/?user=${adv.username}`} className="link"> {adv.username}  
    <b className="eachPostAuthor"> </b>
    </Link> </span>

<span className="postDate">{new Date(adv.createdAt).toDateString()}</span>
</div>
<p className="eachPostDesc">{adv.desc}
<br /> </p>
</div>
</div>
);
}

export default Eachpost