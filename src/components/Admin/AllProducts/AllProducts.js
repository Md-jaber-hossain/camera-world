import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./AllProducts.css"

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // Page loading.....
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    // ----Products delete by Admin-----//
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted successfully')
                        const remaining = products.filter(service => service._id !== id);
                        setProducts(remaining);
                    }

                })
        }
    }
    return (
        <>
            {/* ----All products----- */}
            <div className="container">
                <div className="col-md-12 text-center my-5">
                    <h2 className="fw-bold"><span className="text-primary">Manage All</span> Products</h2>
                    <h3>Total Products: {products?.length}</h3>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map((pd) => <div key={pd._id}>
                        <div className="col">
                            <div className="card h-100 home-card-styles">
                                <div className="img-zoom">
                                    <img src={pd?.img} className="card-img-top img-style" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-primary fw-bold">{pd?.name}</h5>
                                    <p className="card-text text-secondary ">{pd?.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="card-text"><span className="text-primary fw-bold">Price: $ {pd?.price}</span></h5>
                                    </div>
                                    <button onClick={() => handleDelete(pd._id)} className="btn bg-danger my-3 text-white"> Delete </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    );
};

export default AllProducts;
