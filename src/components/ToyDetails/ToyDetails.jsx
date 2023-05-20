import React, { useEffect } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const toyDetails = useLoaderData();
    const { photoURL, name, price, details, seller, email, quantity, rating } = toyDetails;
    return (
        <div className='my-8'>
            <div className='md:flex items-center mb-6'>
                <div className='md:w-1/2'>
                    {
                        <img className='md:h-72 px-16 md:ml-10' src={photoURL} alt="" />
                    }
                </div>
                <div className='md:w-1/2 md:ml-10'>
                    <h3 className='text-2xl'>Toy Name : {name}</h3>
                    <h3 className='text-2xl my-2'>Price : $ {price}</h3>
                    <h3 className='text-2xl'>Available Quantity : {quantity} pcs.</h3>
                    <h3 className='text-2xl mt-2'>Rating : <Rating
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<FaStarHalf className='text-transparent'></FaStarHalf>}
                        placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    </h3>
                </div>
            </div>
            <div>
                <h3 className='text-xl text-gray-500'>Seller Name : {seller}</h3>
                <h3 className='text-xl text-gray-500'>Seller Email : {email}</h3>
                <h2 className='mt-7 text-xl'><span className='font-semibold'>Product Details</span> : {details}</h2>
            </div>
        </div>
    );
};

export default ToyDetails;