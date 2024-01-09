import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-md p-8">
                <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
                <p className="text-lg text-gray-700 mb-4">Oops! Page not found.</p>
                <p className="text-gray-600 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
                <Link to={'/'} ><button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Go Home
                </button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
