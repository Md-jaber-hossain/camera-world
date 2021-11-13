import React from 'react';
import useAuth from '../../../hooks/useAuth';

const WelcomeDashboard = () => {
    const { admin } = useAuth();
    return (
        <>
            <div className="text-center mt-5">
                {admin ? <h1 className="fw-bold">Welcome To <span className="text-primary">Admin Dashboard</span> </h1>
                :
                <h1 className="fw-bold">Welcome To <span className="text-primary">User Dashboard</span> </h1>}
            </div>
            <div className=" text-center mx-auto my-5">
                <img
                    className="image-fluid w-50 h-75"
                    src="https://i.ibb.co/8nk3dVj/undraw-Control-panel-re-y3ar.png"
                    alt=""
                />
            </div>
        </>
    );
};

export default WelcomeDashboard;