import React from "react";
import logodesign from "./assets/logodesign.png";
import "./service.css";
import Navbar from "./components/Navbar";
function Logodesign() {
  return (
    <div>
      <Navbar/>
       <div className="service-web">
      <h1>Logo Design</h1>
      <img src={logodesign} alt="logo design" />
      <div className="description-service">
        <h2>Description</h2>
        <p>
          Your logo is the visual representation of your brand. At Dizayne
          Agency, we understand the importance of a well-designed logo that
          reflects your brand identity and resonates with your target audience.
      
        <b>Our logo design process includes:</b>
        </p>
        <ul class="services-list">
          <li>
            <b> Research and Analysis:</b> We take the time to understand your
            business, your target audience, and your goals, allowing us to
            create a design that aligns with your vision.
          </li>
          <li>
            <b>Conceptualization</b>Our designers create multiple logo
            concepts, each reflecting your brand identity and values.
          </li>
          <li>
            <b>Refinement:</b>We work with you to refine the logo design,
            ensuring that it reflects your vision and resonates with your target
            audience.
          </li>
          <li>
            <b> Finalization:</b>We deliver the final logo design in various
            formats, allowing you to use it across multiple platforms.
          </li>

          <p>
            At Dizayne Agency, we believe that your logo is more than just a
            symbol. It’s a representation of your brand identity and values. Let
            us help you create a logo that truly represents your brand and
            resonates with your target audience.
            <a>Contact us today to get started.</a>
          </p>
        </ul>
      </div>
      </div>
      <div className="Our Work"></div>
    </div>
  );
}

export default Logodesign;
