import React from 'react';
import "./services.css";
import appdesign from "../assets/appdesign.png";
import webdev from "../assets/webdev.png";
import webdesign from "../assets/webdesign.png";
import logodesign from "../assets/logodesign.png";
import featuresimage from "../assets/features.png";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Services() {
  const { ref: refTitle, inView: inViewTitle } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const { ref: refWebDesign, inView: inViewWebDesign } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refWebDev, inView: inViewWebDev } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refAppDesign, inView: inViewAppDesign } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refLogoDesign, inView: inViewLogoDesign } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refFeatures, inView: inViewFeatures } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <div id="services" className="services-section">
        <motion.div
          ref={refTitle}
          initial={{ x: -100, opacity: 0 }}
          animate={inViewTitle ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="service-title"
        >
          <h1>Our Services</h1>
          <p>
            Explore the range of services we offer to elevate your online
            presence
          </p>
        </motion.div>

        <div className="services">
          <motion.div
            ref={refWebDesign}
            initial={{ scale: 0 }}
            animate={inViewWebDesign ? { scale: 1 } : {}}
            transition={{ duration:0.5 }}
            className="service"
          >
            <img src={webdesign} alt="web design" />
            <h2>Web Design</h2>
            <p>
              We create visually stunning websites that are optimized for all
              devices, providing seamless functionality and exceptional user
              experience.
            </p>
            <Link to="/webdesign" className="read-more" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
          </motion.div>

          <motion.div
            ref={refWebDev}
            initial={{ scale: 0 }}
            animate={inViewWebDev ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="service"
          >
            <img src={webdev} alt="web development" />
            <h2>Web Development</h2>
            <p>
              We are experts in developing custom websites that are
              high-performing, secure, and optimized for SEO friendly.
            </p>
            <Link to="/webdev" className="read-more" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
          </motion.div>

          <motion.div
            ref={refAppDesign}
            initial={{ scale: 0 }}
            animate={inViewAppDesign ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="service"
          >
            <img src={appdesign} alt="app design" />
            <h2>App Design</h2>
            <p>
              We create innovative and user-friendly app designs for a seamless
              experience.
            </p>
            <Link to="/appdesign" className="read-more" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
          </motion.div>

          <motion.div
            ref={refLogoDesign}
            initial={{ scale: 0 }}
            animate={inViewLogoDesign ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="service"
          >
            <img src={logodesign} alt="logo design" />
            <h2>Logo Design</h2>
            <p>
              We create well-designed logos that reflect your brand identity and
              resonate with your target audience.
            </p>
            <Link to="/logodesign" className="read-more" onClick={() => window.scrollTo(0, 0)}>Read More</Link>
          </motion.div>
        </div>

        <motion.div
          ref={refFeatures}
          initial={{ scale: 0 }}
          animate={inViewFeatures ? { scale: 1 }: {}}
          transition={{ duration: 1 }}
          className="features-container"
        >
          <div className="container-features">
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
              <h2>Benefits</h2>
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
        </motion.div>
        </div>
      </div>
  
  );
}

export default Services;
