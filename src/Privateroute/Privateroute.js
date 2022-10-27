import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Pages/Authprovider/Authprovider';

const Privateroute = ({ children }) => {

    const { user, loading } = useContext(Authcontext);
    const location = useLocation();

    if (loading) {
        return <Spinner animation='border' variant='primary' />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;

};

export default Privateroute;