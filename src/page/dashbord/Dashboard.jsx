import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useProduct from "../../hook/useProduct";
import ProductCard from "./ProductCard/ProductCard";

const Dashboardhome = () => {
    const data = useProduct();

    const info = [
        {
            name: 'Date',
            weekly: 4000,
            monthly: 2400,
            amt: 2400,
        },
        {
            name: 'Date',
            weekly: 3000,
            monthly: 1398,
            amt: 2210,
        },
        {
            name: 'Date',
            weekly: 2000,
            monthly: 9800,
            amt: 2290,
        },
        {
            name: 'Date',
            weekly: 2780,
            monthly: 3908,
            amt: 2000,
        },
        {
            name: 'Date',
            weekly: 1890,
            monthly: 4800,
            amt: 2181,
        },
        {
            name: 'Date',
            weekly: 2390,
            monthly: 3800,
            amt: 2500,
        },
        {
            name: 'Date',
            weekly: 3490,
            monthly: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className="space-y-10 ">
            <div className="flex justify-between mt-10 items-center ">
                <div className="flex border p-10 bg-green-200 border-green-500 justify-center items-center flex-col w-[275px]">
                    <h1>New Order</h1>
                    <p className="text-xl font-bold">5 </p>
                </div>
                <div className="flex justify-center items-center flex-col border border-[#ef4444] p-10 bg-opacity-50 w-[275px] bg-[#ef4444]">
                    <h1>Confirm Order</h1>
                    <p className="text-xl font-bold">5 </p>
                </div>
                <div className="flex justify-center items-center flex-col w-[275px] bg-green-600 p-10 ">
                    <h1 className="text-white">Total Transaction</h1>
                    <p className="text-xl font-bold text-white">5 </p>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-xl text-black font-semibold">Sell Overview</h1>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <button className="text-black font-bold text-xl">Weekly</button>
                        <button>Monthly</button>
                    </div>
                </div>
                <div className="mt-20 ">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            width={500}
                            height={300}
                            data={info}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="weekly" stroke="#EF4444" strokeDasharray="5" />
                            {/* Replace 'uv' with 'monthly' or 'amt' depending on what you intend */}

                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="border-t-2 border-[#C94428]">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-8 mt-8 ">New Order </h1>
                    <div className="flex flex-col gap-10">
                        {data?.map((item, index) => (
                            <ProductCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboardhome;
