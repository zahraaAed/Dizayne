import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the icons you are using
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/logo.png";
import homeimage from "./assets/homeimage.png";

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contact from "./components/contact.jsx";
import Services from "./components/services.jsx";
import Reasons from "./components/reasons.jsx";

function Home() {
  // const navRef = useRef();

  // const showNavBar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  //   console.log("NavBar toggled");
  // };
  const [isNavOpen, setIsNavOpen] = useState(false); // State to track nav open/close
  const navRef = useRef(); // Reference to the navbar div

  const showNavBar = () => {
    setIsNavOpen(!isNavOpen); // Toggle the state
    console.log(isNavOpen? "Closing" : "Opening"); // Optional logging
  };

  return (
    <div>
      <div className="header">
        <div className="branding">
          <img src={logo} alt="Dizayne Agency Logo" />
          <h2> <span>Dizayne </span> <span>Agency</span></h2>
        </div>
  
        <div className={`navbar ${isNavOpen? 'visible' : 'hidden'}`} ref={navRef}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        {/* <button className="get-in-touch">Get in Touch</button> */}
        
        <button className={`nav-btn nav-close-btn ${isNavOpen? '' : 'hidden'}`} onClick={showNavBar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button className={`nav-btn  ${isNavOpen? '' : 'hidden'}`} onClick={showNavBar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
      </div> */}

      <div className="description">
        <div className="title">
          <h1>Transforming Your Digital Presence</h1>
          <p>
            Dizayne Agency is a premier website design camp providing
            exceptional digital solutions. Our custom web design and
            development, coupled with our logo creation services, will elevate
            your online presence.
          </p>
          <button className="get-intouch">Get in touch</button>
        </div>
        <img src={homeimage} alt="Dizayne Agency Logo" />
      </div>

      <Reasons />
      <Services />
      <Contact />

      <div className="footer">
        <p>&copy; 2024 Dizayne Agency. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
