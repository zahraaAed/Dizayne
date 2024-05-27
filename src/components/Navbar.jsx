import { useRef, useState } from "react";
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeNav = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <div className="heading">
      <header>
        <div className="branding">
         
          <HashLink to="/" onClick={closeNav}>
          <img src={logo} alt="Dizayne Agency Logo" />
        </HashLink>
          <h2>
            <span>Dizayne </span> <span>Agency</span>
          </h2>
        </div>
        <div className="spacer"></div>
        <nav ref={navRef}>
        <HashLink smooth to="/#about" onClick={closeNav}>
          About
        </HashLink>
          <div className="dropdown">
          <a  onClick={toggleDropdown}>
              Services <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon"/>
            </a>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/webdev" onClick={closeNav}>Web development</Link>
                <Link to="/webdesign" onClick={closeNav}>web design</Link>
                <Link to="/logodesign" onClick={closeNav}>logo design</Link>
                <Link to="/appdesign" onClick={closeNav}>app design</Link>
               
              </div>
            )}
          </div>
      
          <HashLink smooth to="/contact"  onClick={closeNav}>
                  Contact
                </HashLink>
          <button className="nav-btn nav-close-btn" onClick={closeNav}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </nav>
        <button className="nav-btn" onClick={() => navRef.current.classList.toggle("responsive_nav")}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
