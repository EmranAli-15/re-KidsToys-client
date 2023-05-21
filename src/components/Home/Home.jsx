import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Banner/Gallery';
import SubCategory from './SubCategory/SubCategory';
import useTitle from '../../hooks/useTitle';
import Offer from './Offer/Offer';
import PaymentMethod from './PaymentMethod/PaymentMethod';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
            <Offer></Offer>
            <PaymentMethod></PaymentMethod>
        </div>
    );
};

export default Home;