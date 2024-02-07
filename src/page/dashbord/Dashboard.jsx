import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import useOrder from "../../hook/useOrder";
import { useEffect, useState } from "react";
import useProduct from "../../hook/useProduct";
import OrderCard from "../../component/orderCard/Ordercard";
import setTitle from "../../hook/setTitle";

const Dashboardhome = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [Pendding, setPendding] = useState(0);
  const [orders] = useOrder();
  const products = useProduct();
  setTitle("Chamrabari || Dashborad");
  useEffect(() => {
    if (orders) {
      let ct = 0;
      let total = 0;
      let pendding = 0;
      orders.forEach((order) => {
        if (order?.confirmStatus === true) {
          // console.log(order.order.productId);
          products?.forEach((pd) => {
            if (order.order.productId === pd._id) {
              total = parseFloat(total) + parseFloat(pd.price);
              setTotal(total);
            }
          });
          ct++;
        } else {
          products?.forEach((pd) => {
            if (order.order.productId === pd._id) {
              pendding = parseFloat(pendding) + parseFloat(pd.price);
              setPendding(pendding.toFixed(2));
            }
          });
        }
      });
      setCount(ct);
    }
  }, [orders, products]);
  return (
    <div className="space-y-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 items-center ">
        <div className="flex border p-10 bg-green-200 border-green-500 justify-center items-center flex-col w-[275px]">
          <h1>New Order</h1>
          <p className="text-xl font-bold">{orders?.length - count}</p>
        </div>
        <div className="flex justify-center items-center flex-col border border-[#ef4444] p-10 bg-opacity-50 w-[275px] bg-[#ef4444]">
          <h1>Confirm Order</h1>
          <p className="text-xl font-bold">{count}</p>
        </div>
        <div className="flex border p-10 bg-green-500 border-green-500 justify-center items-center flex-col w-[275px]">
          <h1 className="text-white">Pendding Transaction</h1>
          <p className="text-xl font-bold text-white">{Pendding} $</p>
        </div>
        <div className="flex border p-10 bg-green-500 border-green-500 justify-center items-center flex-col w-[275px]">
          <h1 className="text-white">Total Transaction</h1>
          <p className="text-xl font-bold text-white">{total} $</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl text-black font-semibold">Sell Overview</h1>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button className="text-black font-bold text-xl">Price</button>
          </div>
        </div>
        <div className="mt-20 ">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={500}
              height={300}
              data={orders}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="updatedAt" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total_amount"
                stroke="#EF4444"
                strokeDasharray="5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="border-t-2 border-[#C94428]">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-8 mt-8 ">New Order </h1>
          <div className="flex flex-col gap-10">
            {orders?.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardhome;
