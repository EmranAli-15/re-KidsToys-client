import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center'>
        <img src="https://i.ibb.co/6nG56mD/giphy.gif" alt="" />
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;