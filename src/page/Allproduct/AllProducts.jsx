import ProductCard from "../../component/productCard/ProductCard";
import setTitle from "../../hook/setTitle";
import useProduct from "../../hook/useProduct";
import { motion } from "framer-motion";

const AllProducts = () => {
  setTitle("Chamrabari || Products");
  const products = useProduct();
  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-center items-center mb-10 flex-col">
          <h2 className="text-3xl font-bold">All Products </h2>
          <div className="bg-[#f8f8f8] w-20 h-[4px]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products?.map((product) => (
            <motion.div
              key={product?._id}
              className="m-4 p-4 max-w-xs border rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        {/* <div className='flex justify-center items-center '>
                    <Link to={'shop/allproduct'} className="mt-2 bg-[#C94428] bg-opacity-69 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none">View More</Link>
                </div> */}
      </div>
    </div>
  );
};

export default AllProducts;
