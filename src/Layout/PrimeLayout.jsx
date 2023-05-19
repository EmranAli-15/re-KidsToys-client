import React from 'react';
import NavBar from '../components/Shared/NavBar/NavBar';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const PrimeLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-250px)] md:px-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PrimeLayout;