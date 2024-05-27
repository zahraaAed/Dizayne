import React from "react";
import "./service.css";
import webdev from "./assets/webdev.png";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
function Webdev() {
  return (
    <div >
      <Navbar/>
        <div className="service-web">
      <h1>Web Development</h1>
      <img src={webdev} alt="web development" />
      <div className="description-service">
      <div className="description-service-info">
      <h2>Description</h2>
      <button className="contact-service-button ">
        <Link to="/contact" className="contact-link">Contact Us</Link>
      </button>
      </div>
     
        
         <p>
          Web development is the backbone of your online presence. At Dizayne
          Agency, we specialize in developing custom websites that are not only
          visually stunning but also high-performing, secure, and scalable.
        
      
          Our team follows a comprehensive web development process, ensuring
          that your website is fast, secure, and optimized for search engines.{" "}
      
        <b>Our process includes:</b>
        </p>
        <ul class="services-list">
    <li>
        <p><b>Planning and Strategy: </b>
        We listen to your business requirements and map out a development plan that aligns with your goals.</p>
    </li>
    <li>
        <p> <b>Front-end Development: </b>
       Our developers use the latest technologies to create the front-end of your website, ensuring optimal performance and functionality.</p>
    </li>
    <li>
         <p> <b>Back-end Development: </b>
      We create a robust back-end that supports your website’s functionality, ensuring that it is secure and scalable.</p>
    </li>
    <li>
          <p> <b>Testing and Deployment: </b>
     We rigorously test your website on various devices and browsers, fixing any bugs, and then deploy it to the public.</p>
    </li>
</ul>

          <p>
            At Dizayne Agency, we believe in creating websites that are more
            than just a digital presence. We create websites that deliver
            results, driving traffic, engagement, and growth.
            <a>Contact us today to start your web development journey.</a>
          </p>
         
           </div>
           </div>
    </div>
  );
}

export default Webdev;
