import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, name, price, photoURL, rating } = category;
    return (
        <div className="card md:w-full glass" data-aos="zoom-in-up">
            <figure><img className='md:h-[180px] h-[110px] w-[110px] md:w-[180px] p-4' src={photoURL} alt="car!" /></figure>
            <div className="card-body">
                <div className='md:flex items-center justify-between'>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <h2 className='text-xl'>Price : ${price}</h2>
                </div>
                <hr className='my-2' />
                <div className="md:flex justify-between items-center">
                    <Rating
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<FaStarHalf className='text-transparent'></FaStarHalf>}
                        placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <button className="btn btn-sm border-0 hover:bg-[#FF3811] my-btn-bg">
                        <Link to={`/toyDetails/${_id}`}>Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;