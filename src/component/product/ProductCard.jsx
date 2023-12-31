// ProductCart.js
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { Authcontext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ProductCart = () => {
    const [products, setProduct] = useState([])
    const { user } = useContext(Authcontext);
    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const navigate = useNavigate('/')
    const handalClick = (product) => {
        if (!user) {
            Swal.fire({
                title: "Are you sure?",
                text: "Please Login fast !!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                    return;
                }
            });
        }
        else {
            const cart = {
                product_name: product.product_name,
                category: product.category,
                sub_category: product.sub_category,
                Product_details: product.Product_details,
                image_url: product.image_url,
                price: product.price,
                user_email: user?.email,
            }
            fetch('http://localhost:3001/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cart),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })


        }





    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
            {products.map((product) => (
                <motion.div
                    key={product}
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
