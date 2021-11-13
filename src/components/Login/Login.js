import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import "./Login.css";
import useAuth from '../../hooks/useAuth';
import MenuBar from '../MenuBar/MenuBar';

const Login = () => {
    const { user, setUser, message, setMessage, setError, loggedInUser, email, password, error, signInUsingGoogle, handleEmailChange, handlePasswordChange, handleLogin, hanleResetPassword, setIsLoading, isLoading, saveUser } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/admin';

    // Redirect current page after google login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                history.push(redirect_uri);
            })
            .catch((error) => { })
            .finally(() => setIsLoading(false));
    }

    // Redirect current page after email password login
    const handleEmailPassLogin = (e) => {
        e.preventDefault();
        handleLogin()
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                history.push(redirect_uri);
                setError("");
            })
            .catch((error) => {
                setMessage(error.message);
            });
    };

    return (
        <>
            {/* ------Navbar--------- */}
            <MenuBar></MenuBar>

            {/* -----login form----- */}
            <div className="container text-center ">
                <div className="row">
                    <div className="login-area col-md-6 mt-5 mb-5">
                        <div>
                            <div className="login-box d-flex align-items-center justify-content-center">
                                <div className="login">
                                    <div className="login-box">
                                        <h2 className="text-primary"><i className="fas fa-sign-in-alt"></i> Pease Login</h2>
                                        <p className="text-danger">{message}</p>
                                        <form onSubmit={handleEmailPassLogin}>
                                            <input
                                                onChange={handleEmailChange}
                                                className="input-felid"
                                                type="email"
                                                name="email"
                                                placeholder="Enter your Email"
                                            />
                                            <br />
                                            <input
                                                onChange={handlePasswordChange}
                                                className="input-felid"
                                                type="password"
                                                name="password"
                                                placeholder="Enter your Password"
                                            />
                                            <br />
                                            <input
                                                className="mt-3 w-100 btn btn-primary text-white fw-bold rounded-3 m-auto"
                                                type="submit"
                                                value="Login"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-info text-white" onClick={handleGoogleLogin}>
                                <i className="fab fa-google"></i> Google sign-in
                            </button>

                            <buton className=" ms-3 btn btn-danger text-white " onClick={hanleResetPassword}>
                                <i className="fas fa-unlock-alt"></i> Reset Password
                            </buton>
                        </div>
                        <br /><br />
                        <p>Are you new user? <Link to="/register" className="text-primary">Click here</Link></p>
                    </div>
                    <div className="col-md-6">
                        <div className="img mt-5">
                            <img
                                className="image-fluid w-100"
                                src="https://i.ibb.co/Rzq9RyF/undraw-details-8k13.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;