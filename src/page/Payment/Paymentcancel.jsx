

const PaymentCancelPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-red-100">
            <div className="bg-white shadow-md rounded-md p-8">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Payment Cancelled</h1>
                <p className="text-lg text-gray-700 mb-4">Your payment has been cancelled.</p>
                <p className="text-gray-600 mb-8">Please try again or contact support if you need assistance.</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default PaymentCancelPage;
