import React from 'react';

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2 bg-gray-100 border-b border-gray-200">
        <h2 className="text-xl font-bold">{order.orderNumber}</h2>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700">{order.customerName}</p>
        <p className="text-gray-500">{order.createdAt}</p>
      </div>
      <div className="px-4 py-2 border-t border-gray-200">
        <ul>
          {order.items.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span>{item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-4 py-2 flex justify-between items-center bg-gray-100">
        <span className="text-gray-700 font-bold">Total:</span>
        <span className="text-gray-700 font-bold">${order.total}</span>
      </div>
    </div>
  );
};

export default OrderCard;
