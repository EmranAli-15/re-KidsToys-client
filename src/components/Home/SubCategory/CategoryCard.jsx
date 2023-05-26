import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, name, price, photoURL, rating } = category;
    return (
        <div className="card rounded-md md:w-full glass" data-aos="zoom-in-up">
            <figure><img className='md:h-[180px] h-[110px] w-[110px] md:w-[180px] p-4' src={photoURL} alt="car!" /></figure>
            <div className="h-[100px] relative">
                <div className='md:flex items-center justify-between px-2'>
                    <h2 className='md:text-lg font-semibold'>
                        {
                            name.length > 10 ? <div>{name.slice(0, 10)}...</div> : name
                        }
                    </h2>
                    <h2 className='text-xs md:text-sm'>Price : $ {price}</h2>
                </div>
                <hr className='my-2' />
                <div className="absolute bottom-3 w-full px-2">
                    <div className='flex justify-between items-center'>
                        <Rating
                            className='text-xs md:text-sm'
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<FaStarHalf className='text-transparent'></FaStarHalf>}
                            placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <button className="btn btn-xs border-0 hover:bg-blue-500 my-btn-bg">
                            <Link to={`/toyDetails/${_id}`}>Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;