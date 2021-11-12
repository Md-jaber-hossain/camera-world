import React from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css"

const MakeAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    fetch("https://salty-fjord-68136.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      alert('Added As Admin Successfully');
    console.log(data);
  };
  return (
    // Admin can make admin by email
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="input-width">
        <h1 className="text-center fw-bold">Make <span className="text-primary">admin</span></h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field text-center mt-5"
            name="email"
            placeholder="Enter Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />

          <input
            className="submit-btn btn btn-primary text-center mt-3"
            type="submit"
            value="Make as Admin"
          />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
