import { useState } from 'react';

const PaymentForm = () => {
    const [paymentData, setPaymentData] = useState({
        name: '',
        phone: '',
        quantity: '',
        deliveryCharge: '',
        total_price: '',
        address: '',
        area: '',
        district: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Uncommented this line

        fetch('http://localhost:3001/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
            mode: 'cors',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(parsedResponse => {
                console.log(parsedResponse);
                window.location.replace(parsedResponse.url)
            })
            .catch(error => {
                console.error('There was a problem with the fetch request:', error);
            });
    };
    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md">
                <label className="block mb-4">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={paymentData.name}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>

                <label className="block mb-4">
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={paymentData.phone}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>

                <label className="block mb-4">
                    Quantity:
                    <input
                        type="number"
                        name="quantity"
                        value={paymentData.quantity}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>

                <label className="block mb-4">
                    Delivery Charge:
                    <input
                        type="number"
                        name="deliveryCharge"
                        value={paymentData.deliveryCharge}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>

                <label className="block mb-4">
                    Total Price:
                    <input
                        type="number"
                        name="total_price"
                        value={paymentData.total_price}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>

                <label className="block mb-4">
                    Address:
                    <textarea
                        name="address"
                        value={paymentData.address}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>

                <label className="block mb-4">
                    Area:
                    <input
                        type="text"
                        name="area"
                        value={paymentData.area}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>

                <label className="block mb-4">
                    District:
                    <input
                        type="text"
                        name="district"
                        value={paymentData.district}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>

                <div className="mt-6">
                    <button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white p-4 w-full">
                        Pay Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;
