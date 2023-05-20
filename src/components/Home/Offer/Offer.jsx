import React from 'react';

const Offer = () => {
    return (
        <div className='flex my-16 items-center bg-stone-200'>
            <div className='w-1/2'>
                <img className='md:h-[400px] h-[150px]' src="https://i.ibb.co/R9JdZ2k/offer.webp" alt="" />
            </div>
            <div className='w-1/2'>
                <div className='md:flex justify-center'>
                    <h1 className='md:text-5xl text-2xl font-serif font-semibold text-blue-500 tracking-widest'>Final Offer For <br /> Summer !!</h1>
                </div>
                <div className='text-center mt-4 -rotate-[20deg]'>
                    <button className='btn my-btn-right'>shop now</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;