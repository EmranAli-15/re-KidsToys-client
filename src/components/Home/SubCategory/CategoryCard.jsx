import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaStarHalf } from "react-icons/fa";

const CategoryCard = ({ category }) => {
    const { name, price, photoURL, rating } = category;
    return (
        <div className="card w-96 glass">
            <figure><img className='h-[230px] w-[230px] p-4' src={photoURL} alt="car!" /></figure>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <h2 className='text-xl'>Price : ${price}</h2>
                </div>
                <hr className='my-2' />
                <div className="flex justify-between items-center">
                    <Rating
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<FaStarHalf className='text-transparent'></FaStarHalf>}
                        placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <button className="btn btn-sm border-0 hover:bg-[#FF3811] my-btn-bg">Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;