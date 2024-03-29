import { motion } from 'framer-motion';
import ProductCard from '../productCard/ProductCard';
import { Link } from 'react-router-dom';
import useProduct from '../../hook/useProduct';


const Product = () => {
    const product = useProduct()
    return (
        <div className='mt-20'>
            <div className='flex justify-center items-center mb-10 flex-col'>
                <h2 className='text-3xl font-bold'>Trending Products </h2>
                <div className='bg-[#f8f8f8] w-20 h-[4px]'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {product?.slice(0, 4).map((product) => (
                    <motion.div
                        key={product?._id}
                        className="m-4 p-4 max-w-xs border rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <ProductCard product={product} />
                    </motion.div>))}
            </div>
            <div className='flex justify-center items-center '>
                <Link to={'shop/allproduct'} className="mt-2 bg-[#C94428] bg-opacity-69 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none">View More</Link>
            </div>
        </div>
    );
};

export default Product;