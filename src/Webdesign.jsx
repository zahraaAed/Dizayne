import React from "react";
import webdesign from "./assets/webdesign.png";
import "./service.css";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
function Webdesign() {
  return (
    <div>
      <div className="nav-service"> <Navbar/> </div>
       <div className="service-web">
      <h1>Web Design</h1>
      <img src={webdesign} alt="web design" />
      <div className="description-service">
        <div className="description-service-info">
      <h2>Description</h2>
      <button className="contact-service-button ">
        <Link to="/contact" className="contact-link">Contact Us</Link>
      </button>
      </div>
      <p>
        At Dizayne Agency, we understand the importance of a well-designed
        website that not only looks great but also delivers exceptional user
        experience. We approach each project with a unique perspective, ensuring
        that your website design reflects your brand identity and resonates with
        your target audience.
   
      <b>Our design process includes:</b>
      </p>
      <ul class="services-list">
        <li>
         <b> Research and Analysis:</b> We take the time to understand your business,
          your target audience, and your goals, allowing us to create a design
          that aligns with your vision.
        </li>
        <li>
          <b>Wireframing and Prototyping: </b>Our designers create a blueprint of your
          website, outlining the structure and layout, and creating a prototype
          for review.
        </li>
        <li>
          <b>Visual Design: </b>Our team creates a visually stunning design that
          reflects your brand identity and delivers an exceptional user
          experience.
        </li>
        <li>
          <b>Responsive Design:</b> We ensure that your website is optimized for all
          devices, providing seamless functionality and accessibility.
        </li>
        <li>
          <b>Testing and Launch: </b>We rigorously test your website on various devices
          and browsers, fixing any bugs, and then launch it to the public.
        </li>
        <p>
          At Dizayne Agency, we believe that website design is more than just
          aesthetics. It’s about creating a digital presence that engages your
          audience and drives growth. Let us help you create a website that
          truly represents your brand and resonates with your target audience.
          <a>Contact us today to get started.</a>
        </p>
    
      </ul>
    </div>
    </div>
    <div className="Our Work">
    
    </div>
   
    </div>

  );
}

export default Webdesign;
