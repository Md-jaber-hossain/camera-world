import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"

const Header = () => {
  return (
    // ----Header section implementation with carousel----//
    <div className="">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active black1">
            <img src="https://i.ibb.co/tqw8W1T/pexels-tirachard-kumtanom-733853.jpg" className="d-block w-100 img-height img-fluid" alt="..." />
            <div className="carousel-caption detail-margin">
              <h2 className="title-header">New Arrival Camera</h2>
              <p>New camera arrived for you to explore more features</p>
              <Link to="/explore"><button className="btn btn-primary text-white"><i className="far fa-address-card"></i> Explore More</button></Link>
            </div>
          </div>
          <div className="carousel-item black1">
            <img src="https://i.ibb.co/PF8Czm7/pexels-zg-r-uzun-832811.jpg" className="d-block w-100 img-height img-fluid" alt="..." />
            <div className="carousel-caption detail-margin">
              <h2 className="title-header">Height Camera featurs</h2>
              <p>A camera is an optical instrument that captures a visual image</p>
              <Link to="/explore"><button className="btn btn-primary text-white"><i className="far fa-address-card"></i> Explore More</button></Link>
            </div>
          </div>
          <div className="carousel-item black1">
            <img src="https://i.ibb.co/gF6FbLj/pexels-ajay-lobo-1205022.jpg" className="d-block w-100 img-height img-fluid" alt="..." />
            <div className="carousel-caption detail-margin">
              <h2 className="title-header">Most Popular Camera</h2>
              <p>The impact on professional photographers has been dramatic for featured camera</p>
              <Link to="/explore"><button className="btn btn-primary text-white"><i className="far fa-address-card"></i> Explore More</button></Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;