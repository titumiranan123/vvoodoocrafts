import React from 'react';
import ProductCart from './ProductCard';

const Product = () => {
    return (
        <div className='mb-10'>
            <div className='flex justify-center items-center mb-10 flex-col'>
                <h2 className='text-4xl font-bold'>Products</h2>
                <div className='bg-[#f8f8f8] w-20 h-[4px]'></div>
            </div>
            <ProductCart />
            <div className='flex justify-center items-center '>
                <button className="mt-2 bg-[#C94428] bg-opacity-69 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none">View More</button>
            </div>
        </div>
    );
};

export default Product;