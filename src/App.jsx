import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCogs, faClock, faHeadset } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import logo from './assets/logo.png'; 
import homeimage from './assets/homeimage.png';
import appdesign from './assets/appdesign.png';
import webdev from './assets/webdev.png';
import webdesign from './assets/webdesign.png';
import logodesign from './assets/logodesign.png';
function App() {
  
  return (
    <>
      <div className="header">
        <div className="branding">
          <img src={logo} alt="Dizayne Agency Logo" />
          <h2>Dizayne Agency</h2>
        </div>

        <div className="navbar">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="get-in-touch">Get in Touch</button>
      </div>

      <div className="description">
        <div className="title">
          <h1>Transforming Your Digital Presence</h1>
          <p>Dizayne Agency is a premier website design camp providing exceptional digital solutions. Our custom web design and development, coupled with our logo creation services, will elevate your online presence.</p>
          <button className="get-intouch">Get in touch</button>
        </div>
        <img src={homeimage} alt="Dizayne Agency Logo" />
      </div>

      <div id="about" className="about-section">
        <h1>Why To Choose Us!</h1>
        <div className="reasons">
        <div className="reason">
  <FontAwesomeIcon icon={faUsers} className="fa-icon" />
  <h1>Experienced Team</h1>
  <p className="hidden">Our agency boasts a team of experts designers and developers with years of experience to deliver top-notch solutions tailored to your needs.</p>
</div>

          <div className="reason">
            <FontAwesomeIcon icon={faCogs} className="fa-icon" />
            <h1>Customized Solutions</h1>
            <p>We offer customized solutions tailored to your specific requirements despite of your service we'll work closely with you to bring your vision to life.</p>
          </div>
          <div className="reason">
            <FontAwesomeIcon icon={faClock} className="fa-icon" />
            <h1>Timely Delivery</h1>
            <p>With a focus on efficient workflow and streamlined processes, we ensure timely delivery of projects without compromising on quality.</p>
          </div>
          <div className="reason">
            <FontAwesomeIcon icon={faHeadset} className="fa-icon" />
            <h1>Excellent Support</h1>
            <p>We provide ongoing support and assistance to our clients, ensuring that any questions or concerns are addressed promptly.</p>
          </div>
        </div>
      </div>

      <div id="services" className="services-section">
        <div className="service-title">
          <h1>Our Services</h1>
          <h4>Explore the range of services we offer to elevate your online presence</h4>
        </div>
        <div className="services">
        <div class="service">
        <img src={webdesign} alt="web design"/>
        <h2>Web Design</h2>
        <p>We create visually stunning websites that are optimized for all devices, providing seamless functionality and exceptional user experience.</p>
      </div>
      <div class="service">
        <img src={webdev} alt="web development"/>
        <h2>Web Development</h2>
        <p>We are experts in developing custom websites that are high-performing, secure, and optimized for search engines.</p>
      </div>
      <div class="service">
        <img src={appdesign} alt="app design"/>
        <h2>App Design</h2>
        <p>We create innovative and user-friendly app designs for a seamless experience</p>
      </div>
      <div class="service">
        <img src={logodesign} alt="logo design"/>
        <h2>Logo Design</h2>
        <p>We create well-designed logos that reflect your brand identity and resonate with your target audience.</p>
      </div>
        </div>
      </div>

      <div id="contact" className="contact-section">
  <div className="contact-content">
    <h2>Contact Us</h2>
    <p>Get in touch with us to discuss your project or for any inquiries.</p>
    <ul className="contact-info">
      <li><FontAwesomeIcon icon={["fab", "instagram"]} className='icon' /> Instagram</li>
      <li><FontAwesomeIcon icon={["fab", "facebook"]} className='icon'/> Facebook</li>
      <li><FontAwesomeIcon icon={["far", "envelope"]} className='icon' /> dizayne-lb@gmail.com</li>
    </ul>

    <form id="contact-form" method="post" action="contact.php">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</div>


      <div className="footer">
        <p>&copy; 2024 Dizayne Agency. All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
