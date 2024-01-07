import { useState } from 'react';
import { Link } from 'react-router-dom';


const CartCard = ({ item }) => {

    // const [quantity, setQuantity] = useState(item);
    // const [price, setPrice] = useState(item.price);
    // const increaseQuantity = () => {
    //     setQuantity(prevQuantity => prevQuantity + 1);
    //     setPrice(() => price + item.price)
    // };

    // const decreaseQuantity = () => {
    //     if (quantity > 0) {
    //         setQuantity(prevQuantity => prevQuantity - 1);
    //         setPrice(() => price - item.price)
    //     }
    // };
    // console.log(item.price)
    const removFromCart = (id) => {
        fetch(`http://localhost:3001/cart/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <div className='flex items-center  gap-10'>
                <div>
                    <img className='w-20 h-20' src={item.image_url} alt="" />
                </div>
                <div>
                    <p className='text-xl font-bold'>{item.product_name}</p>
                </div>
                <div>
                    <p> Price: {item.price}Tk.</p>
                    {/* <div className="flex items-center">
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
                    </div> */}
                </div>
                <div className='flex gap-5'>
                    <Link to={'/payment'}> <button className="btn py-4 px-8 bg-slate-300 rounded-xl font-bold">Pay Now</button></Link>

                    <button onClick={() => removFromCart(item._id)} className="btn py-4 px-8 bg-red-400 hover:bg-red-500 rounded-xl font-bold">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
