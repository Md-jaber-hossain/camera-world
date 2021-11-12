import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import "./MyOrders.css"

const MyOrders = () => {
    const [myproducts, setMyproducts] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyproducts(data));
    }, [user.email]);

    // ----Delete My Orders------//
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
                        const remaining = myproducts.filter(service => service._id !== id);
                        setMyproducts(remaining);
                    }

                })
        }
    }

    return (
        // -------My Order information show-------//
        <div className="container my-5">
            <h1 className="text-center fw-bold my-5">My <span className="text-primary">Order</span> List: {myproducts.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {myproducts?.map((pd, index) => (<div key={pd._id}>
                    <div className="col">
                        <div className="card h-100 home-card-styles">
                            <div className="img-zoom">
                                <img src={pd.img} className="card-img-top my-event-img-style" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center text-primary fw-bold">Personal Info</h5>
                                <span className="card-title "><b>Person:</b> {pd.name}</span> <br />
                                <span className="card-title "><b>Email:</b> {pd.email}</span> <br />
                                <span className="card-title "><b>Phone:</b> {pd.phone}</span> <br />
                                <span className="card-title "><b>Date:</b> {pd.date}</span> <br />
                                <span className="card-title "><b>Address:</b> {pd.address}</span><br /> <br />
                                <h5 className="card-title text-center text-primary fw-bold">Product Info</h5>
                                <span className="card-title "><b>Product Name:</b> {pd.service}</span> <br />
                                <span className="card-title "><b>price:</b> $ {pd?.price}</span> <br />
                                <span className="card-text"><b>Status:</b> <span className="text-success fw-bolder">{pd?.status}</span></span> <br /><br />
                                <div className="text-center">
                                    <button onClick={() => handleDelete(pd._id)} className="btn btn-danger">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;