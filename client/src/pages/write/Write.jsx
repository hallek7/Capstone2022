import React from 'react';
import './write.css';

function Write() {
return (
<div className="write">
<img className="writeImg"
src="https://etc.usf.edu/techease/wp-content/uploads/2017/12/daylily-flower-and-buds-sharp.jpg"
alt="writeimg" />
<form className="writeForm">

<div className="writeForms">
<label htmlFor="upLoadfile"> 
<i className="writeIcon fas fa-plus"></i>
</label>
<input id="fileInput" type="file" style={{ display: "none" }} />
<input className="writeHere" placeholder="Title" type="text"
autoFocus={true}/>
</div>

<div className="writeForms">
<textarea className="writeHere writeText"
 placeholder="Tell your story..." type="text" autoFocus={true}/>
 </div>
 <button className="submit" type="submit"> Post </button>

</form>
</div>
);
}

export default Write;
