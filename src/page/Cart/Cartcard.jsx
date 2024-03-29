import { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hook/useCart";
import Swal from "sweetalert2";

const CartCard = ({ item }) => {
  console.log(item);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(parseFloat(item.price * item.quntity));
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setPrice((prevPrice) => parseFloat(prevPrice) + parseFloat(item.price));
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setPrice((prevPrice) => parseFloat(prevPrice) - parseFloat(item.price));
    }
  };
  const [, refetch] = useCart();
  const removeFromCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3001/api/v1/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "deleted") {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="grid md:grid-cols-4 grid-cols-3 gap-10">
        <div>
          <img className="w-20 h-20" src={item.image_url} alt="" />
        </div>
        <div>
          <p className="text-xl font-bold">{item.product_name}</p>
        </div>
        <div>
          <p> Price: {price.toFixed(3)} $</p>
          <div className="flex items-center">
            <button
              className="text-xs bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="text-gray-700 mx-2">{item.quntity}</span>
            <button
              className="text-xs bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex gap-5 md:col-span-1 col-span-3">
          <Link to={`/payment/${item.productId}`}>
            <button className="btn py-4 px-8 bg-slate-300 rounded-xl font-bold">
              Pay Now
            </button>
          </Link>
          <button
            onClick={() => removeFromCart(item._id)}
            className="btn py-4 px-8 bg-[#C94428] hover:bg-red-500 rounded-xl font-bold"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
