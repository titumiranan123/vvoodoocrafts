import React from 'react';
import ProductCart from './ProductCard';

const Product = () => {
    return (
        <div className='mb-10'>
            <div className='flex justify-center items-center mb-10 flex-col'>
                <h2 className='text-4xl'>Products</h2>
                <div className='bg-[#f8f8f8] w-20 h-[4px]'></div>
            </div>
            <ProductCart />
        </div>
    );
};

export default Product;