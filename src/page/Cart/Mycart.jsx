
import CartCard from "./Cartcard";

import useCart from "../../hook/useCart";
import Loader from "../../component/Utilitis/Loader";



const Mycart = () => {

    const [data] = useCart();

    if (!data) {
        return <Loader />
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mt-8 mb-4">Shopping Cart</h1>
            <div className=" flex flex-col gap-10">
                {data.map((item, index) => (
                    <CartCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Mycart;