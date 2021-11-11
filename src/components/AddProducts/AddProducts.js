import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./AddProducts.css"

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        //-------- Add Product form ----------//
        <div className="container">
            <div className="row">
                <h2 className="text-center my-5 fw-bold">Add New <span className="text-primary">Product</span></h2>
                <div className="col-md-6">
                    <div className="Add-Product-main my-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="AddProduct-form">
                            <input {...register("name", { required: true })} placeholder="Name" />
                            <textarea {...register("description", { required: true })} placeholder="Description" />
                            <input type="number" {...register("price", { required: true })} placeholder="Price" />
                            <input {...register("img")} placeholder="image url" />
                            <input type="submit" className="bg-primary text-white fw-bold" />
                        </form>
                    </div>
                </div>
                <div className="col-md-6 my-5">
                    <img
                        className="image-fluid w-75"
                        src="https://i.ibb.co/Bw4Sb41/undraw-Website-builder-re-ii6e.png"
                        alt=""
                    />
                </div>
            </div>

        </div>
    );
};

export default AddProducts;