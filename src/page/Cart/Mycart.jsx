import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import useCart from "../../hook/useCart";
import CartCard from "./Cartcard";
import { Authcontext } from "../../provider/AuthProvider";


const Mycart = () => {
    const { user } = useContext(Authcontext)
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/cart?email=${user.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, [user])
    // const [data] = useCart();
    console.log(cart)
    if (!cart) {
        return <div className="h-screen flex flex-col justify-center items-center text-4xl">
            <p className="text-red-400">Cart is Empty</p>
            <Link to='/shop' className="btn bg-green-500 mt-10 hover:bg-green-700" >Go to Shoping</Link>
        </div>
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mt-8 mb-4">Shopping Cart</h1>
            <div className=" flex flex-col gap-10">
                {cart.map((item, index) => (
                    <CartCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Mycart;