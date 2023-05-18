import React from 'react';
import bannerOne from '../../../assets/banner_1.webp'
import bannerTwo from '../../../assets/banner_2.webp'
import bannerThree from '../../../assets/banner_3.webp'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bannerOne} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle my-btn-left">❮</a>
                    <a href="#slide2" className="btn btn-circle my-btn-right">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={bannerTwo} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle my-btn-left">❮</a>
                    <a href="#slide3" className="btn btn-circle my-btn-right">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bannerThree} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle my-btn-left">❮</a>
                    <a href="#slide1" className="btn btn-circle my-btn-right">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;