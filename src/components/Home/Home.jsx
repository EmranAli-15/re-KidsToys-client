import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Banner/Gallery';
import SubCategory from './SubCategory/SubCategory';
import useTitle from '../../hooks/useTitle';
import Offer from './Offer/Offer';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
            <Offer></Offer>
        </div>
    );
};

export default Home;