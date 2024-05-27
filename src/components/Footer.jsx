import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Logo from "../assets/logo.png";
import { HashLink } from 'react-router-hash-link';

import "./Footer.css";

const Footer = () => {
  // Use useEffect if you need to perform any side effects

  return (
    <div className="bg-content">
      <footer className="footer">
        {/* Logo and Agency Name */}
        <div className="container-logo">
          <img src={Logo} alt="logo" className="logo" />
          <h1>Dizayne Agency</h1>
        </div>

        {/* Main Sections */}
        <section className="container section">
          <div className="grid">
            {/* Info Section */}
            <div className="info">
              <h6 className="title">Dizayne Agency</h6>
              <hr className="divider" />
              <div className="content">
                <p className="text-white">
                  <strong>Dizayne Agency</strong> is a premier website design
                  camp providing exceptional digital solutions. Our custom web
                  design and development, coupled with our logo creation
                  services, will elevate your online presence.
                </p>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="links">
              <h6 className="title">Useful links</h6>
              <hr className="divider" />
              <p>
             
                <HashLink smooth to="/#about" className="text-white">
          About
        </HashLink>
              </p>
              <p>
                <HashLink smooth to="/#services" className="text-white">
                  Services
                </HashLink>
              </p>
              <p>
                <HashLink smooth to="/contact" className="text-white">
                  Contact
                </HashLink>
              </p>
            </div>

            {/* Contact Section */}
            <div className="contact">
              <h6 className="title">Contact</h6>
              <hr className="divider" />
              <ul className="contact-footer">
                <li>
                  <a
                    href="https://www.instagram.com/Dizayne_lb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="icon" />{" "}
                    Dizayne-lb
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Dizayne_lb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="icon" />{" "}
                    Dizayne-lb
                  </a>
                </li>
                <li>
                  <a href="mailto:dizayne-lb@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
                    Dizayne.lb@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Bottom */}
      
      </footer>
      <div className="footer-bottom">
          <p>&copy; 2024 Dizayne Agency. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
