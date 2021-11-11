import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          {/* ---Footer body--- */}
          <div className="row">
            <div className="col-md-3">
              <h4 className="border-style">Contact</h4>
              <div>
                <p><i className="fas fa-map-marker-alt"></i> Mirpur-1, Dhaka, Bangladesh</p>
                <p><i className="far fa-envelope"></i> md.jaber8695@gmail.com</p>
                <p><i className="fas fa-phone-alt"></i> 01621390353</p>
              </div>
            </div>

            <div className="col-md-3">
              <h4 className="border-style">About</h4>
              <p>Camera Reviews</p>
              <p>Choose Best Camera</p>
              <p>Hekp to purchase</p>
              <p>24/7 open for services</p>
              <p>Start journey | 2021</p>
            </div>

            <div className="col-md-3">
              <h4 className="border-style2">Products</h4>
              <p>Mew featured camera</p>
              <p>Most popular brands</p>
              <p>Best quality product</p>
              <p>Home delivery facilities</p>
              <p>Chipest price</p>
            </div>

            <div className="col-md-3">
              <div className="mb-4">
                <h2 className="fw-bold"><span className="text-primary">Camera</span> World</h2>
              </div>
              <div className="pe-5">
                <span> <small> We've chosen a selection of cameras that make it easy to shoot compelling lifestyle images, ideal for sharing on social media.</small></span> <br /> <br />
                <small>Camera World is to serve better camera to everyone</small>
              </div>
            </div>
          </div>

          <div className="row text-center my-5">
            <div className="col-md-2">
              <p className="p-color">Privacy Policy</p>
            </div>
            <div className="col-md-2">
              <p className="p-color">Camera</p>
            </div>
            <div className="col-md-2">
              <p className="p-color">Customer Support</p>
            </div>
            <div className="col-md-2">
              <p className="p-color">Apps</p>
            </div>
            <div className="col-md-2">
              <p className="p-color">More To know</p>
            </div>
            <div className="col-md-2">
              <p className="p-color">Detals</p>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <div>
              {/* -----Social media Icon for footer------*/}
              <div className="d-flex justify-content-center">
                <div className="fs-3">
                  <i className="fab fa-facebook-square"></i>
                </div>
                <div className="fs-3 twitter ms-4">
                  <i className="fab fa-twitter-square"></i>
                </div>
                <div className="fs-3 ms-4">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="fs-3 ms-4">
                  <i className="fab fa-reddit-square"></i>
                </div>
              </div>
              <p className="text-secondary">
                <small>Copyright © .Jaber, All rights reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
