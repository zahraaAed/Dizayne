import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCogs,
  faClock,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "./reasons.css";
function Reasons() {
  return (
    <div>
       <div id="about" className="about-section">
        <div className="about-title">
          <h1>Why To Choose Us!</h1>
        </div>
        <div className="reasons">
          <div className="reason">
            <FontAwesomeIcon icon={faUsers} className="fa-icon" />
            <h1>Experienced Team</h1>
            <p className="hidden">
              Our agency boasts a team of experts designers and developers with
              years of experience to deliver top-notch solutions tailored to
              your needs.
            </p>
          </div>

          <div className="reason">
            <FontAwesomeIcon icon={faCogs} className="fa-icon" />
            <h1>Customized Solutions</h1>
            <p>
              We offer customized solutions tailored to your specific
              requirements despite of your service we'll work closely with you
              to bring your vision to life.
            </p>
          </div>
          <div className="reason">
            <FontAwesomeIcon icon={faClock} className="fa-icon" />
            <h1>Timely Delivery</h1>
            <p>
              With a focus on efficient workflow and streamlined processes, we
              ensure timely delivery of projects without compromising on
              quality.
            </p>
          </div>
          <div className="reason">
            <FontAwesomeIcon icon={faHeadset} className="fa-icon" />
            <h1>Excellent Support</h1>
            <p>
              We provide ongoing support and assistance to our clients, ensuring
              that any questions or concerns are addressed promptly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reasons
