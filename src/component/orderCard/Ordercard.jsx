import { useEffect, useState } from "react";
import useProducts from "../../hook/useProducts";
import useOrder from "../../hook/useOrder";

const OrderCard = ({ order }) => {
  const [product] = useProducts();
  const [data, setData] = useState([]);
  const [, refeatch] = useOrder();
  useEffect(() => {
    product?.forEach((pt) => {
      if (pt._id === order.order.productId) {
        setData(pt);
      }
    });
  }, [product, order]);
  const confirmOrder = (id) => {
    fetch(`http://localhost:3001/payment/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refeatch(); // Assuming this is a typo and should be 'refetch()'
        console.log(data);
      })
      .catch((error) => {
        console.error("Error confirming order:", error);
      });
  };

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
        <button
          onClick={() => confirmOrder(order._id)}
          className={`${
            order.confirmStatus
              ? "disabled btn  hover:bg-slate-300 bg-slate-300"
              : "btn bg-orange-500 hover:bg-orange-300"
          }`}
        >
          Confirmed
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
