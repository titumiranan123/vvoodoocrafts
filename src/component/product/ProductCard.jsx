// ProductCart.js
import React from 'react';
import { motion } from 'framer-motion';

const products = [
    {
        "product_name": "Leather Belt",
        "category": "Men",
        "sub_category": "Belt",
        "Product_details": "Genuine leather belt with a classic buckle",
        "price": "$39.99",
        "image_url": "https://img.freepik.com/free-photo/shoemaker-workshop-making-shoes_171337-12277.jpg?w=826&t=st=1703729816~exp=1703730416~hmac=05527397b60a7eabfc8ed2f527eaa076096b8c38a7a8b4bc787eb87d42a2a9b7"
    },
    {
        "product_name": "Women's Wallet",
        "category": "Women",
        "sub_category": "Wallet",
        "Product_details": "Stylish and functional wallet for women",
        "price": "$29.99",
        "image_url": "https://img.freepik.com/free-photo/shoemaker-workshop-making-shoes_171337-12277.jpg?w=826&t=st=1703729816~exp=1703730416~hmac=05527397b60a7eabfc8ed2f527eaa076096b8c38a7a8b4bc787eb87d42a2a9b7"
    },
    {
        "product_name": "Corporate Laptop Bag",
        "category": "Corporate",
        "sub_category": "Bag",
        "Product_details": "Professional laptop bag with multiple compartments",
        "price": "$59.99",
        "image_url": "https://img.freepik.com/free-photo/shoemaker-workshop-making-shoes_171337-12277.jpg?w=826&t=st=1703729816~exp=1703730416~hmac=05527397b60a7eabfc8ed2f527eaa076096b8c38a7a8b4bc787eb87d42a2a9b7"
    },
    {
        "product_name": "Unisex Gadget Cover",
        "category": "Uni sex",
        "sub_category": "gadget cover",
        "Product_details": "Universal gadget cover for phones and small devices",
        "price": "$19.99",
        "image_url": "https://img.freepik.com/free-photo/shoemaker-workshop-making-shoes_171337-12277.jpg?w=826&t=st=1703729816~exp=1703730416~hmac=05527397b60a7eabfc8ed2f527eaa076096b8c38a7a8b4bc787eb87d42a2a9b7"
    }
];

const ProductCart = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
            {products.map((product) => (
                <motion.div
                    key={product.id}
                    className="m-4 p-4 max-w-xs border rounded-lg shadow-md"
                    whileHover={{ scale: 1.05 }}

                >
                    <img src={product.image_url} alt={product.product_name} className="mb-4 rounded-lg" />
                    <h3 className="text-lg font-semibold">{product.product_name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                    <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className="mt-2 bg-[#C94428] text-white px-4 py-2 rounded-lg focus:outline-none">
                        Add to Cart
                    </motion.button>
                </motion.div>
            ))}
        </div>
    );
};

export default ProductCart;
