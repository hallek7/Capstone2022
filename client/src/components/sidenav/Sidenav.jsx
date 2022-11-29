  import React from 'react'
  import './sidenav.css'


  function Sidenav() {
  return (
  <div className="sidenav">
  <div className="sidebarItem">
  <span className="sidebarTitle">ABOUT ME</span>
  <img src='https://etc.usf.edu/techease/wp-content/uploads/2017/12/daylily-flower-and-buds-sharp.jpg'/> 
  <p>Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit </p>

  </div>
  <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidenavListItem"> LIFE  </li>
            <li className="sidenavListItem"> PETS  </li>
            <li className="sidenavListItem"> CATS  </li>
            <li className="sidenavListItem"> DOGS  </li>
              </ul>
        </div>
    </div>
  );
  }

  export default Sidenav;