import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <img src="https://i.ibb.co/NTZK81q/404.jpg" alt="" />
        </div>
    );
};

export default ErrorPage;