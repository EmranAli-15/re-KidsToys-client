import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/popular')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-16'>
            <h1 className='text-5xl font-semibold text-center mb-4'>
                Our Rich Products
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 text-center px-8'>
                {
                    products.map((product, index) => 
                    <div key={index} className='border rounded-md'>
                        <div className='flex justify-center p-4'>
                            <img className='h-20 md:h-40 w-40' src={product.img} alt="" />
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