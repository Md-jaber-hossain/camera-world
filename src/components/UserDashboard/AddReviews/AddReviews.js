import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import "./AddReviews.css"

const AddReviews = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addReviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        //-------- Add Review form------------//
        <div className="container">
            <div className="row">
                <h2 className="text-center fw-bold my-5">Add a <span className="text-primary">Review</span></h2>
                <div className="col-md-6">
                    <div className="Add-Review-main my-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="AddReview-form">
                            <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Name" />
                            <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
                            <textarea {...register("review", { required: true })} placeholder="Review" />
                            {/* <input type="number" {...register("rating", { required: true })} placeholder="Rating" /> */}
                            <select {...register("rating")}>
                                <option value="0">Rating</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="4">5</option>
                            </select>
                            <input {...register("img")} placeholder="image url" />
                            <input type="submit" className="bg-primary text-white fw-bold" />
                        </form>
                    </div>
                </div>
                <div className="col-md-6 my-5">
                    <img
                        className="image-fluid w-75"
                        src="https://i.ibb.co/R3ZCHxG/undraw-Add-file-re-s4qf.png"
                        alt=""
                    />
                </div>
            </div>

        </div>
    );
};

export default AddReviews;