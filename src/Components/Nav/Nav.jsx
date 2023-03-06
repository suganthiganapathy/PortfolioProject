import React from "react";
import navbarstyle from "./nav.module.css"

function Navbar() {
  return (
    <>
     <header>
      <div className={navbarstyle.container}>
        <nav className={navbarstyle.navbaritems}>
            <a href="/" className={navbarstyle.anchor}>Sugi</a>
              <ul className={navbarstyle.navitems}>
                <li><a href="/" className={navbarstyle.anchor}>Home</a></li>
                <li><a href="#aboutpage" className={navbarstyle.anchor}>About Me</a></li>
                <li><a href="#projectspage" className={navbarstyle.anchor}>Projects</a></li>
                {/* <li><a href="#contactpage" className={navbarstyle.anchor}>Contact</a></li> */}
              </ul>
         </nav>
      </div>
    </header>
    
</>
  );
}
export default Navbar;
