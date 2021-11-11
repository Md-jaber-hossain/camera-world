import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ManageAll.css"

const ManageAll = () => {

    const [orders, setOrders] = useState([]);
    const [modifiedCount, setModifiedCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setModifiedCount(0);
            });
    }, [modifiedCount]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted successfully')
                        const remaining = orders.filter(service => service._id !== id);
                        setOrders(remaining);
                    }

                })
        }
    }
    // ---------Update Status-----------//

    const handleSubmit = (id) => {
        const data = { status: 'Approved' }
        fetch(`http://localhost:5000/update/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // if (result.modifiedCount) {
                //     alert('Updated successfully');
                // }
                setModifiedCount(result.modifiedCount);
            });
        console.log(id);
    };

    return (
        // -----Manage all Order information from Menubar-----//
        <>
            <div id="services" className="container mt-5 mb-5">
                <div className="col-md-12 text-center my-5">
                    <h2 className="fw-bold">Manage <span className="text-primary"> All</span> Orders: {orders.length}</h2>
                    <p className="text-secondary text-center">All orders from orders are below</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        orders.map(suborders => <div key={suborders._id}>
                            <div className="col">
                                <div className="card h-100 home-card-styles">
                                    <div className="img-zoom">
                                        <img src={suborders.img} className="card-img-top my-event-img-style" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center text-primary fw-bold">Personal Info</h5>
                                        <span className="card-title "><b>Person:</b> {suborders.name}</span> <br />
                                        <span className="card-title "><b>Email:</b> {suborders.email}</span> <br />
                                        <span className="card-title "><b>Phone:</b> {suborders.phone}</span> <br />
                                        <span className="card-title "><b>Date:</b> {suborders.date}</span> <br />
                                        <span className="card-title "><b>Address:</b> {suborders.address}</span> <br /><br />
                                        <h5 className="card-title text-center text-primary fw-bold">Order Info</h5>
                                        <span className="card-title "><b>Product Name:</b> {suborders.service}</span> <br />
                                        <span className="card-title "><b>Price:</b> $ {suborders?.price}</span> <br />
                                        <span className="card-text"><b>Status:</b> <span className="text-danger">{suborders?.status}</span></span> <br /><br />
                                        <div className="text-center">
                                            <button onClick={() => handleDelete(suborders._id)} className="btn btn-danger">Delete</button>
                                            <button onClick={() => handleSubmit(suborders._id)} className="btn btn-primary fw-bold rounded-3 text-white ms-2">Approved</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </>
    );
};

export default ManageAll;