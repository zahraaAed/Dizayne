import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1m07sjl', 'template_mk9g0yc', form.current, 'S5zeLnBSS1x_6khDh')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="main-contact">
      <div id="contact" className="contact-section">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>Get in touch with us to discuss your project or for any inquiries.</p>
          <div className="content">
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
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
  );
}

export default Contact;
