import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the icons you are using
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/logo.png";
import homeimage from "./assets/homeimage.png";
import Navbar from "./components/Navbar.jsx";

import { Link } from 'react-router-dom';
import Contact from "./pages/contact";
import Services from "./components/services.jsx";
import Reasons from "./components/reasons.jsx";

import Footer from "./components/Footer";
import CarouselComponent from "./components/test";
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
          <button className="get-intouch">
      <Link to="/contact" className="contact-link">Get in touch</Link>
    </button>
        </div>
        <img src={homeimage} alt="Dizayne Agency Logo" />
      </div>

      <Reasons />
      <Services />
    
      <Footer/>

      {/* <div className="footer-rights">
        <p>&copy; 2024 Dizayne Agency. All rights reserved.</p>
      </div> */}
    </div>
  );
}

export default Home;
