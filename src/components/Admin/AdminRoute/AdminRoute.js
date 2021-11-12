import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    // const {children, ...rest} = props;
    const { user, isLoading, admin, isAdminLoading } = useAuth();
    if (isAdminLoading) {
        return <div className="text-center">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    return (
        // ----Admin route for redirecting login page to expected page-----//
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? (
                children) : (
                <Redirect
                    to={{
                        pathname: '/home',
                        state: { from: location }
                    }}
                ></Redirect>)}
        >

        </Route>
    );
};

export default AdminRoute;