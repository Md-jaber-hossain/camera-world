import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rating from "react-rating";

const ManageReviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    // ----Products delete by Admin-----//
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/deleteReviews/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted successfully')
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }

                })
        }
    }

    return (
        // --------All Reviews for Admin---------------//
        <div id="reviewss" className="container mt-5 mb-5">
            <div className="col-md-12 text-center my-5">
                <h2 className="fw-bold">Customer <span className="text-primary">Reviews</span></h2>
                <p className="text-secondary text-center">Our customers give this reviews. Please read and feel free to buy</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map((subreviews) => <div key={subreviews._id}>
                        <div className="col">
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
                                    <br />
                                    <button onClick={() => handleDelete(subreviews._id)} className="btn bg-danger my-3 text-white"> Delete </button>
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

export default ManageReviews;