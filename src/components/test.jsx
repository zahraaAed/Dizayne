import React from 'react';
import webdev from "../assets/webdev.png";
import webdesign from "../assets/webdesign.png";
import logodesign from "../assets/logodesign.png";
import "../App.css";
const CarouselComponent = () => {
  return (
    <div className="description">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="title">
              <img src={webdev}  alt="Web Development" />
              <div className='title'>
                <h1>Transforming Your Digital Presence</h1>
                <p>
                  Dizayne Agency is a premier website design camp providing exceptional digital solutions. Our custom web design and development, coupled with our logo creation services, will elevate your online presence.
                </p>
                <button className="get-intouch btn btn-primary">Get in touch</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={webdesign} className="d-block w-100" alt="Web Design" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Custom Web Design Service</h1>
              <p>
                From concept to launch, trust <strong>Dizayne Agency</strong> to elevate your brand and make your business shine online.
              </p>
              <button className="get-intouch btn btn-primary">Get in touch</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={webdesign} className="d-block w-100" alt="Web Design" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Custom Web Design Service</h1>
              <p>
                Elevate your online presence with our tailored web design solutions. Dizayne Agency specializes in creating unique, user-friendly websites that stand out.
              </p>
              <button className="get-intouch btn btn-primary">Get in touch</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={logodesign} className="d-block w-100" alt="Logo Design" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Professional Logo Design</h1>
              <p>
                Make a lasting impression with a distinctive logo crafted by Dizayne Agency. Our expert designers will create a logo that embodies your brand's identity and values.
              </p>
              <button className="get-intouch btn btn-primary">Get in touch</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
