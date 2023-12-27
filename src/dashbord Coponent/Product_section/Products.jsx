import { useForm } from "react-hook-form";

const Products = () => {
    const { register, handleSubmit, errors } = useForm;
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="product_name" className="block text-gray-700">
                        Product Name:
                    </label>
                    <input
                        type="text"
                        id="product_name"
                        name="product_name"
                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"
                        ref={register({ required: true })}
                    />
                    {errors.product_name && (
                        <span className="text-red-500">Product Name is required</span>
                    )}
                </div>\
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700">Category:</label>
                    <select
                        id="category"
                        name="category"
                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring w-full">
                        <option value="">
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Children">Children</option>
                            <option value="Corporate">Corporate</option>
                        </option>
                    </select>
                    {errors.category && (
                        <span className="text-red-500">Category is required</span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="Product_details" className="block text-gray-700">
                        Product Details:
                    </label>
                    <textarea
                        id="Product_details"
                        name="Product_details"
                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"
                        ref={register({ required: true })}
                    ></textarea>
                    {errors.Product_details && (
                        <span className="text-red-500">Product Details are required</span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700">
                        Price:
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"
                        ref={register({ required: true })}
                    />
                    {errors.price && (
                        <span className="text-red-500">Price is required</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Products;