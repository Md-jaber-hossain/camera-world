import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddReviews from '../UserDashboard/AddReviews/AddReviews';
import Payment from '../UserDashboard/Payment/Payment';
import "./Dashboard.css"
import ManageAll from '../ManageAll/ManageAll';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from './AdminRoute/AdminRoute';
import AddProducts from '../AddProducts/AddProducts';
import AllProducts from './AllProducts/AllProducts';
import MyOrders from '../MyOrders/MyOrders';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { name, logout, admin, user } = useAuth();

    return (
        // ------Admin Main Dash Board------------//
        <div className="dashboard-container">
            <div className="dashboard">
                <div className="row">
                    <div className="col-md-2 ">
                        <div className="dashboard-area">
                            <h4 className=" pt-5 ps-md-3 ps-5 text-color"><i className="fas fa-user-cog"></i>Dashboard</h4>
                            <div className="mt-4">
                                <Link as={Link} to="/home" className="all-list"><li className="dashboard-menu p-2 ps-5 text-white">
                                    <i className="fas fa-caret-right"></i> Home
                                </li>
                                </Link>
                                {/* -------Users------ */}
                                {!admin ? <div>
                                    <Link to={`${url}`} className="all-list">
                                        <li className="dashboard-menu p-2 ps-5 text-white">
                                            <i className="fas fa-caret-right"></i> My Orders
                                        </li>
                                    </Link>
                                    <Link to={`${url}/payment`} className="all-list">
                                        <li className="dashboard-menu p-2 ps-5 text-white">
                                            <i className="fas fa-caret-right"></i> Payment
                                        </li>
                                    </Link>
                                    <Link to={`${url}/review`} className="all-list">
                                        <li className="dashboard-menu p-2 ps-5 text-white">
                                            <i className="fas fa-caret-right"></i> Add Review
                                        </li>
                                    </Link>
                                </div>

                                :
                                // -------Admin------------
                                <div>
                                    <Link to={`${url}/allProducts`} className="all-list">
                                        <li className="dashboard-menu p-2 ps-5 text-white">
                                            <i className="fas fa-caret-right"></i> Manage All Products
                                        </li>
                                    </Link>
                                    <Link to={`${url}/allOrders`} className="all-list">
                                        <li className="dashboard-menu p-2 ps-5 text-white">
                                            <i className="fas fa-caret-right"></i> Manage All Orders
                                        </li>
                                    </Link>
                                    <Link to={`${url}/addProduct`} className="all-list">
                                        <li className="dashboard-menu p-2 ps-5 text-white">
                                            <i className="fas fa-caret-right"></i> Add Product
                                        </li>
                                    </Link>
                                    <Link to={`${url}/makeAdmin`} className="all-list">
                                        <li className="dashboard-menu p-2 ps-5 text-white">
                                            <i className="fas fa-caret-right"></i> Make Admin
                                        </li>
                                    </Link>
                                </div>}
                                {user?.email &&
                                    <div className="p-2 ps-5">
                                        <button className=" btn btn-primary" onClick={logout}>Logout</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    {/* -----All details show from user and admin---- */}
                    <div className="col-md-10">
                        <Switch>
                            {/* --------user---------- */}
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <AddReviews></AddReviews>
                            </Route>

                            {/* -------Admin--------- */}
                            <AdminRoute path={`${path}/allProducts`}>
                                <AllProducts></AllProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/allOrders`}>
                                <ManageAll></ManageAll>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProducts></AddProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Dashboard;