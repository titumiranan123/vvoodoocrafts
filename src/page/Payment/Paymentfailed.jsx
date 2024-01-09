import { Link } from "react-router-dom";

const PaymentFailedPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-red-100">
            <div className="bg-white shadow-md rounded-md p-8">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Payment Failed</h1>
                <p className="text-lg text-gray-700 mb-4">Unfortunately, your payment was unsuccessful.</p>
                <p className="text-gray-600 mb-8">Please check your details and try again or contact support for assistance.</p>
                <Link to={'/cart'}><button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Retry Payment
                </button></Link>
            </div>
        </div>
    );
};

export default PaymentFailedPage;
