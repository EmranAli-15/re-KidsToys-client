import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://toy-server-omega.vercel.app/popular')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-16'>
            <h1 className='text-5xl font-serif text-blue-500 font-semibold text-center mb-4'>
                Our BestSellers
            </h1>
            <div data-aos="zoom-in-up" className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-8'>
                {
                    products.map((product, index) => 
                    <div key={index} className='border rounded-md'>
                        <div className='flex justify-center p-4'>
                            <img className='h-20 md:h-28 w-28' src={product.img} alt="" />
                        </div>
                        <h3 className='text-2xl font-medium'>{product.title}</h3>
                        <p className='text-lg mb-2'>Price : {product.price}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;