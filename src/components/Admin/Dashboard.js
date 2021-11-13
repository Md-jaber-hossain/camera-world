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
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import WelcomeDashboard from '../UserDashboard/WelcomeDashboard/WelcomeDashboard';
import { Container, Navbar } from 'react-bootstrap';
import ManageReviews from './ManageReviews/ManageReviews';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { name, logout, admin, user } = useAuth();

    return (
        // ------Admin Main Dash Board------------//
        <div className="dashboard-container">
            <div className="dashboard">
                <div className="row">
                    <div className="col-md-2">
                        <div className="dashboard-area d-none d-md-block">
                            <h4 className=" pt-5 ps-md-3 ps-5 text-color"><i className="fas fa-tasks"></i> Dashboard</h4>
                            <div className="mt-4">
                                <Link as={Link} to="/home" className="all-list"><li className="dashboard-menu p-2 ps-5 text-white">
                                    <i className="fas fa-caret-right"></i> Home
                                </li>
                                </Link>
                                {/* <Link to={`${url}`} className="all-list">
                                    <li className="dashboard-menu p-2 ps-5 text-white">
                                        <i className="fas fa-caret-right"></i> a
                                    </li>
                                </Link> */}
                                {/* -------Users------ */}
                                {!admin ? <div>
                                    <Link to={`${url}/myOrder`} className="all-list">
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
                                        <Link to={`${url}/allReviews`} className="all-list">
                                            <li className="dashboard-menu p-2 ps-5 text-white">
                                                <i className="fas fa-caret-right"></i> Manage All Reviews
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
                                {user?.email && <li className="list p-2 ps-5" style={{ color: "skyBlue"}}>
                                    {user.displayName}
                                </li>
                                }
                                {user?.email &&
                                    <div className="p-2 ps-5">
                                        <button className=" btn btn-primary" onClick={logout}>Logout</button>
                                    </div>
                                }
                            </div>
                        </div>
                        {/* --------Dashboard Navbar-------- */}

                        <div className="d-block d-md-none">
                            <Navbar bg="white" variant="light" sticky="top" collapseOnSelect expand="lg" >
                                <Container>
                                    {/* <Navbar.Brand href="#home">

                                    </Navbar.Brand> */}
                                    <Navbar.Toggle />
                                    <Navbar.Collapse className="justify-content-end">
                                        <div className="dashboard-area">
                                            <h4 className=" pt-5 ps-md-3 ps-5 text-color"><i className="fas fa-tasks"></i> Dashboard</h4>
                                            <div className="mt-4">
                                                <Link as={Link} to="/home" className="all-list"><li className="dashboard-menu p-2 ps-5 text-white">
                                                    <i className="fas fa-caret-right"></i> Home
                                                </li>
                                                </Link>
                                                {/* -------Users------ */}
                                                {!admin ? <div>
                                                    <Link to={`${url}/myOrder`} className="all-list">
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
                                                        <Link to={`${url}/allReviews`} className="all-list">
                                                            <li className="dashboard-menu p-2 ps-5 text-white">
                                                                <i className="fas fa-caret-right"></i> Manage All Reviews
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
                                                {user?.email && <li className="list p-2 ps-5" style={{ color: "skyBlue" }}>
                                                    {user.displayName}
                                                </li>
                                                }
                                                {user?.email &&
                                                    <div className="p-2 ps-5">
                                                        <button className=" btn btn-primary" onClick={logout}>Logout</button>
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </div>

                    {/* -----All details show from user and admin---- */}
                    <div className="col-md-10">
                        <Switch>
                            <PrivateRoute exact path={path}>
                                <WelcomeDashboard></WelcomeDashboard>
                            </PrivateRoute>
                            {/* --------user---------- */}
                            <PrivateRoute exact path={`${path}/myOrder`}>
                                <MyOrders></MyOrders>
                            </PrivateRoute>
                            <PrivateRoute exact path={`${path}/payment`}>
                                <Payment></Payment>
                            </PrivateRoute>
                            <PrivateRoute exact path={`${path}/review`}>
                                <AddReviews></AddReviews>
                            </PrivateRoute>

                            {/* -------Admin--------- */}

                            <PrivateRoute exact path={path}>
                                <WelcomeDashboard></WelcomeDashboard>
                            </PrivateRoute>
                            <AdminRoute path={`${path}/allProducts`}>
                                <AllProducts></AllProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/allOrders`}>
                                <ManageAll></ManageAll>
                            </AdminRoute>
                            <AdminRoute path={`${path}/allReviews`}>
                                <ManageReviews></ManageReviews>
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
    );
};

export default Dashboard;