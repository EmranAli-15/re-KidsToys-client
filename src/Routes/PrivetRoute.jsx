import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
    return <div>
        <Navigate state={{ from: location }} to="/login" replace>
            {
                Swal.fire({
                    icon: 'warning',
                    title: 'Please login before go there!',
                })
            }
        </Navigate>

    </div>
};

export default PrivetRoute;