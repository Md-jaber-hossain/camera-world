import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAuth from '../../../hooks/useAuth';
import MenuBar from '../../MenuBar/MenuBar';

const ExploreProducts = () => {

    // -------Animation-----//
    useEffect(() => {
        AOS.init();
    }, []);
    //--------------//

    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    // page loading.....
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

    return (
        <>
            {/* ----Navbar------- */}
            <MenuBar></MenuBar>

            {/* --------Product for Explore page---------------// */}
            <div id="products" className="container mt-5 mb-5">
                <div className="col-md-12 text-center my-5">
                    <h2 className="fw-bold">Our <span className="text-primary"> Products</span></h2>
                    <p className="text-secondary text-center">Here are our details product for all of you</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        products.slice(6).map((subproducts) => <div key={subproducts._id}>
                            <div className="container my-5">
                                <div className="col" data-aos="flip-down" data-aos-easing="ease-in-out" data-aos-delay="400">
                                    <div className="card h-100 home-card-styles">
                                        <div className="img-zoom">
                                            <img src={subproducts.img} className="card-img-top img-style" alt="..." />
                                        </div>
                                        <div className="card-body text-center">
                                            {/* <div className="d-flex justify-content-around"> */}
                                            <h5 className="card-title text-center text-primary fw-bold">{subproducts.name}</h5>
                                            {/* </div> */}
                                            <p className="card-text text-secondary ">{subproducts.description}</p>
                                            <div className="d-flex justify-content-between">
                                                <h5 className="card-text"><span className="text-primary fw-bold">Price: $ {subproducts.price} </span></h5>
                                                <Link to={`/orderform/${subproducts._id}`}> <button className="btn btn-primary text-white"><i className="fas fa-suitcase-rolling"></i> Purchase Now</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default ExploreProducts;