// ProductCart.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';



const ProductCart = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handalClick = (product) => {
        const { _id } = product;

        fetch('http://localhost:3001/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product_id: _id, user_email: user }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Added",
            showConfirmButton: false,
            timer: 1500
        });
    }
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
                    <motion.button onClick={() => handalClick(product)} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className="mt-2 bg-[#C94428] text-white px-4 py-2 rounded-lg focus:outline-none">
                        Add to Cart
                    </motion.button>
                </motion.div>
            ))}
        </div>
    );
};

export default ProductCart;
