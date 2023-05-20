import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <img src="https://i.ibb.co/vw3HJRj/404page.jpg" alt="" />
        </div>
    );
};

export default ErrorPage;