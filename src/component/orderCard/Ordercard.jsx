import { useEffect, useState } from "react";
import useProducts from "../../hook/useProducts";

const OrderCard = ({ order }) => {
  const [product] = useProducts();
  const [data, setData] = useState([]);
  useEffect(() => {
    product?.forEach((pt) => {
      if (pt._id === order.order.productId) {
        setData(pt);
        console.log(pt);
      }
    });
  }, [product, order]);
  return (
    <div className="bg-white flex justify-center items-center shadow-lg rounded-lg overflow-hidden">
      <div>
        <img className="w-20 h-20" src={data.image_url} />
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700">{order.order.name}</p>
        <p className="text-gray-500">{order.updatedAt}</p>
      </div>
      <div className="px-4 py-2 flex justify-between items-center bg-gray-100">
        <span className="text-gray-700 font-bold">
          Total:{order.total_amount}
        </span>
      </div>
      <div>
        <button className="btn bg-orange-400">Confirmed</button>
      </div>
    </div>
  );
};

export default OrderCard;
