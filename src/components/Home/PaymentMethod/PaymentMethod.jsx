import React from 'react';

const PaymentMethod = () => {
    return (
        <div className='bg-stone-200 py-4 rounded-md'>
            <h1 className='text-3xl text-center font-semibold text-gray-500 font-mono'>Why is so popular this website</h1>
            <div className='md:flex items-center'>
                <div className='md:w-1/2'>
                    <p className='text-xl font-semibold'>
                        Our Specialty !!
                    </p>
                    <p className='ml-4 my-4'>
                    Online payment methods eliminate the need for physical cash or checks. With just a few clicks or taps, you can make payments from anywhere and at any time, as long as you have an internet connection. This convenience is especially beneficial for online shopping and e-commerce transactions.Reputable online payment systems utilize advanced encryption and security measures to protect users' financial information. This includes technologies like tokenization, secure sockets layer (SSL) encryption, and two-factor authentication. These security measures help safeguard your personal and financial data, reducing the risk of fraud and unauthorized access.
                    </p>
                </div>
                <div className='flex items-center justify-center md:w-1/2'>
                    <div>
                        <img className='h-12 w-16 md:h-28 md:w-28' src="https://i.ibb.co/713vThC/taptap.png" alt="" />
                        <img className='h-12 w-16 md:h-28 md:w-28' src="https://i.ibb.co/bgMyJVr/nadad.png" alt="" />
                    </div>
                    <div>
                        <img className='h-12 w-16 p-2 md:p-6 md:h-28 md:w-28' src="https://i.ibb.co/Y8c2nqL/bd-bank.png" alt="" />
                        <img className='h-12 w-16 p-4 md:h-28 md:w-28' src="https://i.ibb.co/8MzW00P/bkash.png" alt="" />
                    </div>
                    <div>
                        <img className='h-12 w-16 p-4 md:h-28 md:w-28' src="https://i.ibb.co/1sywssB/sonali.png" alt="" />
                        <img className='h-12 w-16 p-4 md:h-28 md:w-28' src="https://i.ibb.co/rfG2ZvT/ucb.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;