import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from './Header/Header';
import "./Home.css"
import HomeDetails from './HomeDetails/HomeDetails';
import Reviews from './Reviews/Reviews';
import AboutUs from './AboutUs/AboutUs';
import MenuBar from '../MenuBar/MenuBar';


const Home = () => {

    return (

        <>
            {/* ------Navbar--------- */}
            <MenuBar></MenuBar>
            
            {/* ------Header------- */}
            <Header></Header>

            {/* -------Home Details---- */}
            <HomeDetails></HomeDetails>

            {/* -----About Us------ */}
            <AboutUs></AboutUs>

            {/* ------ Reviews------- */}
            <Reviews></Reviews>

            {/* ---------Featured Camera----------- */}
            <div className=" container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold">Featured<span className="text-primary"> Camera</span></h2>
                        <p className="text-secondary text-center">This are the best for 2021</p>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 container mx-auto mt-2 mb-5">
                <div className="col" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div className="card h-100 card-border card-styles card-zoom">
                        <img src="https://i.ibb.co/nc3pw6m/YXENFXTph-Tsi7t7of-ZFgjn-970-80-jpg.webp" className="card-img-top mb-3" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Fujifilm X-T30</h5>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div className="card h-100 card-border card-styles card-zoom">
                        <img src="https://i.ibb.co/BzT7P9q/cq-Eckjx-LJmbh-Vwh-Z7m-Bac-E-970-80-jpg.webp" className="card-img-top mb-3" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Canon EOS Rebel T8i</h5>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div className="card h-100 card-border card-styles card-zoom">
                        <img src="https://i.ibb.co/4ThHvSM/Sws-V6a55huh-Qg7-Rt2-Gzv-H4-970-80-jpg.webp" className="card-img-top mb-3" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Nikon Z50</h5>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div className="card h-100 card-border card-styles card-zoom">
                        <img src="https://i.ibb.co/FWgDfMD/8-AMJ4-JXEUqn-KFeu3-Rxsf-HK-970-80-jpg.webp" className="card-img-top mb-3" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Sony ZV-1</h5>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;

