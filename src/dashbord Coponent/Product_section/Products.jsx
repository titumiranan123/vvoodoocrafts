import React from 'react';
import { useForm } from 'react-hook-form';

const Products = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data); // You can perform actions with the form data here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            {/* Product Name */}
            <div className="mb-4">
                <label htmlFor="product_name" className="block text-gray-700">
                    Product Name:
                </label>
                <input
                    type="text"
                    id="product_name"
                    name="product_name"
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"

                />

            </div>

            {/* Category */}
            <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700">
                    Category:
                </label>
                <select
                    id="category"
                    name="category"
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"

                >
                    <option value="">Select Category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Children">Children</option>
                    <option value="Corporate">Corporate</option>
                </select>

            </div>

            {/* Sub Category */}
            <div className="mb-4">
                <label htmlFor="sub_category" className="block text-gray-700">
                    Sub Category:
                </label>
                <select
                    id="sub_category"
                    name="sub_category"
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"

                >
                    <option value="">Select Sub Category</option>
                    <option value="Belt">Belt</option>
                    <option value="Wallet">Wallet</option>
                    {/* Add other sub categories based on your schema */}
                </select>

            </div>

            {/* Product Details */}
            <div className="mb-4">
                <label htmlFor="Product_details" className="block text-gray-700">
                    Product Details:
                </label>
                <textarea
                    id="Product_details"
                    name="Product_details"
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"

                ></textarea>

            </div>

            {/* Price */}
            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700">
                    Price:
                </label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"

                />

            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default Products;
