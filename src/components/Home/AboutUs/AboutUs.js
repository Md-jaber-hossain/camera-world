import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./AboutUs.css"

const AboutUs = () => {
    return (
        // -----About Us information show------//
        <>
            <div className=" container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold">About <span className="text-primary"> Us</span></h2>
                        <p className="text-secondary text-center">We are trusted camera sallers</p>
                    </div>
                </div>
            </div>

            <div id="percent" className="container my-5">
                <div className="row mx-auto">
                    {/* <div className="col-lg-12"> */}
                    <div className="card mb-6 about-card-shadow">
                        <div className="row g-0 text-lg-start text-center">
                            <div className="col-md-6" data-aos="zoom-in-right" data-aos-easing="ease-in-out" data-aos-delay="100">
                                <div className="card-body mt-4">
                                    <h2>About our journey</h2>
                                    <p className="text-secondary">Our goal is to sell any camera that can be best for you from making you nicer. Our product comes from abroad and our business owners focucess on best camera for everybody. sell online, or reach global audiences. Whether in our website, you can find your perfect camera from us</p>
                                    <ul className="text-primary">
                                        <li>Best Camera</li>
                                        <li>best branded camera</li>
                                        <li>Warranty up to 10 years</li>
                                    </ul>
                                    <h6>Feel free to buy and enjoy your desired camera in low cost. Our services are always waiting for our customers</h6>
                                    
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="zoom-in-left" data-aos-easing="ease-in-out" data-aos-delay="100">
                                <div className="p-3 my-2">
                                    <img src="https://i.ibb.co/N3Q7sft/pexels-andre-furtado-1264210.jpg" className="d-block w-100 about-img-rounded" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;