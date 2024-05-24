import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the icons you are using
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/logo.png";
import homeimage from "./assets/homeimage.png";
import Navbar from "./components/Navbar.jsx";

import { Link } from 'react-router-dom';
import Contact from "./components/contact.jsx";
import Services from "./components/services.jsx";
import Reasons from "./components/reasons.jsx";

function Home() {


  return (
    <div>
      <Navbar/>

 

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
