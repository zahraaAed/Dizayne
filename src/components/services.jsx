import React from 'react'
import "./services.css";
import appdesign from "../assets/appdesign.png"
import webdev from "../assets/webdev.png";
import webdesign from "../assets/webdesign.png";
import logodesign from "../assets/logodesign.png";
import featuresimage from "../assets/features.png";
import { Link } from 'react-router-dom';
function Services() {
  return (
    <div>
      
      <div id="services" className="services-section">
        <div className="service-title">
          <h1>Our Services</h1>
          <p>
            Explore the range of services we offer to elevate your online
            presence
          </p>
        </div>
        <div className="services">
          <div className="service">
            <img src={webdesign} alt="web design" />
            <h2>Web Design</h2>
            <p>
              We create visually stunning websites that are optimized for all
              devices, providing seamless functionality and exceptional user
              experience.
            </p>
            <Link to="/webdesign" className="read-more" onClick={() => window.scrollTo(0, 0)} >Read More</Link>
          </div>
          <div className="service">
            <img src={webdev} alt="web development" />
            <h2>Web Development</h2>
            <p>
              We are experts in developing custom websites that are
              high-performing, secure, and optimized for search engines.
            </p>
            <Link to="/webdev" className="read-more" onClick={() => window.scrollTo(0, 0)} >Read More</Link>
          </div>
          <div className="service">
            <img src={appdesign} alt="app design" />
            <h2>App Design</h2>
            <p>
              We create innovative and user-friendly app designs for a seamless
              experience
            </p>
            <Link to="/appdesign" className="read-more" onClick={() => window.scrollTo(0, 0)} >Read More</Link>
          </div>
          <div className="service">
            <img src={logodesign} alt="logo design" />
            <h2>Logo Design</h2>
            <p>
              We create well-designed logos that reflect your brand identity and
              resonate with your target audience.
            </p>
            <Link to="/logodesign" className="read-more" onClick={() => window.scrollTo(0, 0)} >Read More</Link>
          </div>
        </div>
        <div className="features-container">
          <div className="container-features ">
            <div className="line"></div>
            <div className="word">Features & Benefits</div>
            <div className="line"></div>
          </div>
          <div className="features">
            <div className="feature">
              <h2>Features</h2>
              <ul>
                <li>Custom Web Design</li>
                <li>Expert Web Development</li>
                <li>Creative Logo Creation</li>
                <li>Responsive Design</li>
                <li>Unparalleled Customer Support</li>
              </ul>
            </div>

            <div className="feature">
              <h2>Features</h2>
              <ul>
                <li>Elevated Online Presence</li>
                <li>Enhanced User Experience</li>
                <li>Optimized Functionality</li>
                <li>Streamlined Brand Identity</li>
                <li>Exceptional Value for Your Investment</li>
              </ul>
            </div>
            <img src={featuresimage} alt="featuresimage" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
