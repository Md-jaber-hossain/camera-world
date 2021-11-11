import React from 'react';
import { Link } from 'react-router-dom';
import "./Error.css"

const Error = () => {
    return (
        // Show error message when route not found
        <>
        <div className="text-center mt-5"><Link to="/home"><button className="btn btn-primary text-white fw-bold"><i class="fas fa-backward"></i> Back to home</button></Link></div>
        <div className="error-style container text-center mt-5 mb-5">
            <img className="w-75 h-75" src="https://i.ibb.co/7yp6X6J/Blue-White-Grey-Nerdy-Birthday-Card.png" alt="..." />
        </div>
        </>
    );
};

export default Error;