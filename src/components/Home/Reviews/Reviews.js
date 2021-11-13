import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rating from "react-rating";

const Reviews = () => {

    // -------Animation-----//
    useEffect(() => {
        AOS.init();
    }, []);
    //--------------//

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://salty-fjord-68136.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        // --------Reviews page---------------//
        <div id="reviewss" className="container mt-5 mb-5">
            <div className="col-md-12 text-center my-5">
                <h2 className="fw-bold">Customer <span className="text-primary">Reviews</span></h2>
                <p className="text-secondary text-center">Our customers give this reviews. Please read and feel free to buy</p>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    reviews.map((subreviews) => <div key={subreviews._id}>
                        <div className="col" data-aos="flip-down" data-aos-easing="ease-in-out" data-aos-delay="400">
                            <div className="card h-100 home-card-styles">
                                <div className="img-zoom">
                                    <img src={subreviews.img} className="card-img-top img-style" alt="..." />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-center text-primary fw-bold">{subreviews.name}</h5>
                                    <p className="card-text text-secondary ">{subreviews.review}</p>
                                    <Rating
                                        initialRating={subreviews.rating}
                                        className=" text-warning"
                                        emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color"
                                        readonly
                                    />
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

export default Reviews;