import CartCard from "./Cartcard";
import useCart from "../../hook/useCart";
import { Link } from "react-router-dom";


const Mycart = () => {
    const [data] = useCart();

    if (data == 0) {
        return (<div className="flex gap-10 justify-center flex-col items-center h-screen text-2xl">
            Product Not Found
            <Link to={'/'} className="btn bg-[#C94428]">Go Home</Link>
        </div>)
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mt-8 mb-4">Shopping Cart</h1>
            <div className=" flex flex-col gap-10">
                {data?.map((item, index) => (
                    <CartCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Mycart;