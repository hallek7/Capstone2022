import { Link } from "react-router-dom";
import React from "react";
import "./adv.css";
import Ads from "../ads/Ads";

function Adv({adv}) {
return (
<div className='adv'>   
{adv.pics &&(
<img className="postImg"
src={adv.pics} alt="someimg"/> 
)}
<div className="postInfo">
    <div className="postCats">
      {adv.categories.map(c=>(
        <span className="postCat">  {c.name}</span>
      )
      )}
      </div>
          <Link to={`/adv/${adv._id}`} className="link">
        <span className="postTitle">{adv.title}</span>
          </Link>
        <hr />
        <span className="postDate">{new Date(adv.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{adv.desc}</p>

</div>
);
}

export default Adv;
