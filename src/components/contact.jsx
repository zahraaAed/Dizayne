import React from 'react';
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div>
            <div id="contact" className="contact-section">
  <div className="contact-content">
    <h2>Contact Us</h2>
    <p>Get in touch with us to discuss your project or for any inquiries.</p>
    <div className="content">
      <div>
        <form id="contact-form" method="post" action="contact.php">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
     
      <div>
      <ul className="contact-info">
  <li>
    <Link to="https://www.instagram.com/Dizayne_lb" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="icon" />
    </Link>

  </li>
  <li>
    <Link to="https://www.facebook.com/Dizayne_lb" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} className="icon" />
    </Link>
  
  </li>
  <li>
    <Link to="mailto:dizayne-lb@gmail.com">
      <FontAwesomeIcon icon={faEnvelope} className="icon" />
    </Link>
   
  </li>
</ul>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact
