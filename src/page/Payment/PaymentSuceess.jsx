
const PaymentConfirmation = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Confirmed!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Thank you for your purchase. Your payment has been successfully processed.
                </p>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => window.location.replace('/')}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default PaymentConfirmation;
