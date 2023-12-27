import CartCard from "./Cartcard";

const cartItems = [
    {
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 20,
        quantity: 1,
    },
    {
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 30,
        quantity: 1,
    },
];
const Mycart = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mt-8 mb-4">Shopping Cart</h1>
            <div className=" flex flex-col gap-10">
                {cartItems.map((item, index) => (
                    <CartCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Mycart;