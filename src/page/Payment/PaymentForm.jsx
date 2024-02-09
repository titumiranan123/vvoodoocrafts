import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import setTitle from "../../hook/setTitle";
import useCart from "../../hook/useCart";

const PaymentForm = () => {
  setTitle("Chamrabari || Payment");
  const { productId } = useParams();
  const [productprice, serProductpirce] = useState();
  const [quantity, setQuntity] = useState();
  const [data] = useCart();

  useEffect(() => {
    data?.map((pd) => {
      let price = 0;
      if (pd._id === productId) {
        console.log(pd);
        setQuntity(pd.quantity);
        price = pd.price * pd.quantity;
        serProductpirce(price);
      }
    });
  }, [data, productId]);
  const [city, setCity] = useState("");
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());

    const data = {
      name: formDataObject.name,
      email: formDataObject.email,
      quantity: quantity,
      deliveryCharge: city == "Dhaka" ? 50 : 120,
      total_price: productprice,
      address: formDataObject.addressLine,
      city: formDataObject.city,
      state: formDataObject.state,
      zipcode: formDataObject.zipCode,
      productId: productId,
    };
    console.log({
      name: formDataObject.name,
      email: formDataObject.email,
      quantity: quantity,
      deliveryCharge: city == "Dhaka" ? 50 : 120,
      total_price: productprice,
      address: formDataObject.addressLine,
      city: formDataObject.city,
      state: formDataObject.state,
      zipcode: formDataObject.zipCode,
      productId: productId,
    });
    fetch("http://localhost:3001/payment", {
      method: "POST",
      headers: {
        // authorization: `bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formDataObject.name,
        email: formDataObject.email,
        quantity: quantity,
        deliveryCharge: city == "Dhaka" ? 50 : 120,
        total_price: productprice,
        address: formDataObject.addressLine,
        city: formDataObject.city,
        state: formDataObject.state,
        zipcode: formDataObject.zipCode,
        productId: productId,
      }),
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((parsedResponse) => {
        console.log(parsedResponse);
        window.location.replace(parsedResponse.url);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch request:", error);
      });
  };
  // const [paymentData, setPaymentData] = useState({
  //   phone: "",
  //   quantity: "",
  //   deliveryCharge: "",
  //   total_price: productprice,
  //   address: "",
  //   area: "",
  //   district: "",
  //   productId: productId,
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);

  // };

  return (
    <div className="container mx-auto mt-8">
      <div className="font-[sans-serif] bg-gray-50">
        <div className="xl:col-span-2 h-max rounded-md p-8 sticky top-0">
          <h2 className="text-2xl font-bold text-[#333]">
            Complete your order
          </h2>
          <form onSubmit={handleSubmit} className="mt-10">
            {/* Personal Details */}
            <div>
              <h3 className="text-lg font-bold text-[#333] mb-6">
                Personal Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="number"
                    placeholder="Number"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-[#333] mb-6">
                Shipping Address
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="addressLine"
                  placeholder="Address Line"
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                />
              </div>
            </div>
            <div className="mt-10">
              <div>
                <input
                  type="radio"
                  name="city"
                  id="dhaka"
                  value="Dhaka"
                  onChange={handleCityChange}
                  checked={city === "Dhaka"}
                />{" "}
                <label htmlFor="dhaka">Dhaka</label>
                <input
                  type="radio"
                  name="city"
                  id="others"
                  value="Others"
                  onChange={handleCityChange}
                  checked={city === "Others"}
                />{" "}
                <label htmlFor="others">Others</label>
                City
              </div>
            </div>

            <div className="flex gap-6 max-sm:flex-col mt-10">
              <Link to="/">
                <button
                  type="button"
                  className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-[#333]"
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
              >
                Complete Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
{
  /* <form
        onSubmit={handleSubmit}
        className="max-w-[1000px] mx-auto bg-white p-8   border-[#c94428] border rounded-lg shadow-2xl"
      >
        <label className="block mb-4 ">
          Name:
          <input
            type="text"
            name="name"
            value={paymentData.name}
            onChange={handleChange}
            className="form-input mt-1 py-2 px-2 block w-full border-[#c94428] border rounded-md"
          />
        </label>
        <label className="block mb-4">
          Phone:
          <input
            type="tel"
            name="phone"
            value={paymentData.phone}
            onChange={handleChange}
            className="form-input mt-1 py-2 px-2 block w-full border-[#c94428] border rounded-md"
          />
        </label>
        <label className="block mb-4">
          Quantity:
          <input
            type="number"
            name="quantity"
            value={paymentData.quantity}
            onChange={handleChange}
            className="form-input mt-1 py-2 px-2 block w-full border-[#c94428] border rounded-md"
          />
        </label>
        <label className="block mb-4">
          Delivery Charge:
          <input
            type="number"
            name="deliveryCharge"
            value={paymentData.deliveryCharge}
            onChange={handleChange}
            className="form-input mt-1 py-2 px-2 block w-full border-[#c94428] border rounded-md"
          />
        </label>
        <label className="block mb-4">
          Total Price:
          <input
            type="number"
            name="total_price"
            value={productprice}
            defaultValue={productprice}
            className="form-input mt-1 py-2 px-2 block w-full border-[#c94428] border rounded-md"
          />
        </label>
        <label className="block mb-4">
          Address:
          <textarea
            name="address"
            value={paymentData.address}
            onChange={handleChange}
            className="form-input mt-1 py-2 px-2 block w-full border-[#c94428] border rounded-md"
          />
        </label>
        <label className="block mb-4">
          Area:
          <input
            type="text"
            name="area"
            value={paymentData.area}
            onChange={handleChange}
            className="form-input mt-1 py-2 px-2 block w-full border-[#c94428] border rounded-md"
          />
        </label>

        <label className="block mb-4">
          District:
          <input
            type="text"
            name="district"
            value={paymentData.district}
            onChange={handleChange}
            className="form-input mt-1 py-2 px-2 block w-full border-[#c94428] border rounded-md"
          />
        </label>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white p-4 w-full"
          >
            Pay Now
          </button>
        </div>
      </form> */
}
