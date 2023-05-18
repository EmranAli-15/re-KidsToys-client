import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Banner/Gallery';
import SubCategory from './SubCategory/SubCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
        </div>
    );
};

export default Home;