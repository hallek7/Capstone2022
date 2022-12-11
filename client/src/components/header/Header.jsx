import React from 'react';
import './header.css';
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Pet Sitter</span>
        <span className="headerTitleLg">App</span>
      </div>
      <img
        className="headerImg"
        src="https://etc.usf.edu/techease/wp-content/uploads/2017/12/daylily-flower-and-buds-sharp.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;
