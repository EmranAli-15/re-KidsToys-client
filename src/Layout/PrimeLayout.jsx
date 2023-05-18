import React from 'react';
import NavBar from '../components/Shared/NavBar/NavBar';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const PrimeLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PrimeLayout;