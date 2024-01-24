import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useProduct from "../../../hook/useProduct";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";





const UpdateFrom = () => {
    const { id } = useParams();

    const { register, handleSubmit } = useForm()
    const [item, setProduct] = useState('')
    const [data, refetch] = useProduct()
    useEffect(() => {
        data.map(product => {
            if (product._id === id) {
                setProduct(product)
            }
        })
    }, [id, data])

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        const file = data.image[0]
        const based64 = await covertToBased24(file)

        const productData = {
            product_name: data.product_name,
            category: data.category,
            sub_category: data.sub_category,
            Product_details: data.Product_details,
            image_url: based64,
            price: data.price,
        }
        fetch(`http://localhost:3001/products/${item._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        })
            .then(response => {
                if (!response.ok) {

                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(parsedResponse => {

                if (parsedResponse.message === 'Product Update') {
                    Swal.fire(
                        'Update Success!',
                        'Your file has been Updated.',
                        'success'
                    )
                    refetch()
                    navigate('/dashboard')
                }
                else {
                    Swal.fire(
                        'Update failed!',
                        'Your file has been Updated.',
                        'warning'
                    )
                }

            })
            .catch(error => {
                console.error('There was a problem with the fetch request:', error);
            });
    };

    return (
        <div>
            <div>
                <h2 className='text-4xl font-bold text-center mt-10 mb-10 '>Edit Your  Product </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl  mx-auto">
                <div>
                    {/* <img src={item?.image_url} alt="" /> */}
                    <label htmlFor="image" className="block text-gray-700">
                        Product Image:
                    </label>
                    <input type="file" {...register("image")} name="image" id="" />
                </div>
                <div className="mb-4">
                    <label htmlFor="product_name" className="block text-gray-700">
                        Product Name:
                    </label>
                    <input
                        type="text"
                        id="product_name"
                        name="product_name"
                        className="border border-[#C94428] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"
                        {...register("product_name")}
                        defaultValue={item.product_name}
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
                        className="border border-[#C94428] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"
                        {...register("category")}
                        defaultValue={item.category}
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
                        className="border border-[#C94428] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"
                        {...register("sub_category")}
                        defaultValue={item.sub_category}
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
                        className="border border-[#C94428] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"
                        {...register("Product_details")}
                        defaultValue={item.Product_details}
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
                        className="border border-[#C94428] rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 w-full"
                        {...register("price")}
                        defaultValue={item.price}
                    />

                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-[#C94428] bg-opacity-90 text-white px-4 py-2 rounded-md hover:bg-opacity-100"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateFrom;
const covertToBased24 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (err) => {
            reject(err)
        }
    })
}