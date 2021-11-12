import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeDetails = () => {

    // -------Animation-----//
    useEffect(() => {
        AOS.init();
    }, []);
    //--------------//

    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://salty-fjord-68136.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    // Home page loading.....
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

    return (
        // --------Product for home page---------------//
        <div id="products" className="container mt-5 mb-5">
            <div className="col-md-12 text-center my-5">
                <h2 className="fw-bold">Our <span className="text-primary"> Products</span></h2>
                <p className="text-secondary text-center">We provide best cameras from all over the world</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.slice(0, 6).map((subproducts) => <div key={subproducts._id}>
                        <div className="col" data-aos="flip-down" data-aos-easing="ease-in-out" data-aos-delay="400">
                            <div className="card h-100 home-card-styles">
                                <div className="img-zoom">
                                    <img src={subproducts.img} className="card-img-top img-style" alt="..." />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-center text-primary fw-bold">{subproducts.name}</h5>
                                    <p className="card-text text-secondary ">{subproducts.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="card-text"><span className="text-primary fw-bold">Price: $ {subproducts.price}</span></h5>
                                        <Link to={`/orderform/${subproducts._id}`}> <button className="btn btn-primary text-white"><i class="fas fa-shopping-cart"></i> Buy Now</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeDetails;