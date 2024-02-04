
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useProducts from '../../../hook/useProducts';

const ProductCard = ({ item }) => {
const [,refetch]=useProducts()
    const removeProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3001/products/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.message === "deleted") {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        });
    };
    return (
        <div className=''>
            <div className='grid grid-cols-4 gap-10'>
                <div>
                    <img className='w-20 h-20' src={item.image_url} alt="" />
                </div>
                <div>
                    <p className='text-xl font-bold'>{item.product_name}</p>
                </div>
                <div>
                    <p> Price: {item.price}Tk.</p>
                </div>
                <div className='flex gap-5'>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}

                    <Link to={`/dashboard/products/${item._id}`}><button className="btn border border-[#C94428]" >Edit Product</button></Link>

                    <button onClick={() => removeProduct(item._id)} className="btn py-4 px-8 bg-[#C94428] hover:bg-red-500 rounded-xl font-bold">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
