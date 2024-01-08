import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hook/useCart';
import Swal from 'sweetalert2';

const CartCard = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(parseFloat(item.price));
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        setPrice(prevPrice => parseFloat(prevPrice) + price);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            setPrice(prevPrice => parseFloat(prevPrice) - price);
        }
    };

    const [data, refetch] = useCart()
    console.log(data, refetch)
    const removeFromCart = (id) => {
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

                fetch(`http://localhost:3001/cart/${id}`, {
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
        <div>
            <div className='flex items-center gap-10'>
                <div>
                    <img className='w-20 h-20' src={item.image_url} alt="" />
                </div>
                <div>
                    <p className='text-xl font-bold'>{item.product_name}</p>
                </div>
                <div>
                    <p> Price: {price}Tk.</p>
                    <div className="flex items-center">
                        <button
                            className="text-xs bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
                            onClick={decreaseQuantity}
                        >
                            -
                        </button>
                        <span className="text-gray-700 mx-2">{quantity}</span>
                        <button
                            className="text-xs bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
                            onClick={increaseQuantity}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <Link to={'/payment'}>
                        <button className="btn py-4 px-8 bg-slate-300 rounded-xl font-bold">Pay Now</button>
                    </Link>
                    <button onClick={() => removeFromCart(item._id)} className="btn py-4 px-8 bg-red-400 hover:bg-red-500 rounded-xl font-bold">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
