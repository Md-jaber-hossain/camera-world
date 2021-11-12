import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./OrderForm.css"
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';

const OrderForm = () => {

    const { user } = useAuth();
    const { orderId } = useParams();

    const [orders, setOrders] = useState([]);

    const { register, handleSubmit, setFocus, reset } = useForm();

    useEffect(() => {
        fetch('https://salty-fjord-68136.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const detailsMatchedCard = orders?.find(suborders => suborders._id === orderId);

    // ----focus on Product name field---- //
    useEffect(() => {
        setFocus("service");
    }, [setFocus]);

    // --------Post the Order and Product--------- //

    const onSubmit = data => {
        console.log(data);
        data.img = detailsMatchedCard.img
        data.country = detailsMatchedCard.country
        data.price = detailsMatchedCard.price
        data.description = detailsMatchedCard.description
        data.status = "Pending";
        axios.post('https://salty-fjord-68136.herokuapp.com/addOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <>
            {/* ----Navbar------- */}
            <MenuBar></MenuBar>
            <div className="container">
                {/* -----Order form------- */}
                <div className="row">
                    <h2 className="text-center fw-bold my-5">Order <span className="text-primary">Form</span></h2>
                    <div className="col-md-6">
                        <div className="order-form-main mb-5 mt-3">
                            <form onSubmit={handleSubmit(onSubmit)} className="order-form">
                                <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Name" />
                                <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
                                <input defaultValue={detailsMatchedCard?.name} {...register("service", { required: true })} placeholder="Package" />
                                <input type="date" {...register("date")} placeholder="Date" />
                                <input type="number" {...register("phone")} placeholder="Phone" />
                                <input type="text" {...register("address")} placeholder="Address" />
                                <input type="submit" className="bg-primary fw-bold text-white" />
                            </form>
                        </div>
                    </div>
                    {/* ------Details of specific product------- */}
                    <div className="col-md-6 mt-3 mb-5">
                        <div className="card h-100 home-card-styles">
                            <img src={detailsMatchedCard?.img} className="card-img-top" alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title"> Product Name: <span className="text-primary fw-bold">{detailsMatchedCard?.name}</span> </h5>
                                <p className="card-text text-secondary">{detailsMatchedCard?.description}</p>
                                <div className="d-flex">
                                    <h5 className="card-text">Price: <span className="text-primary fw-bold">$ {detailsMatchedCard?.price}</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderForm;