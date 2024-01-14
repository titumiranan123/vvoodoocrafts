import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Index";
import Singup from "../page/Singuppage/Singuppage";
import Mycart from "../page/Cart/Mycart";
import Dashboardlayout from "../Layout/Dashboardlayout";
import PaymentForm from "../page/Payment/PaymentForm";
import Login from "../page/Loginpage/Loginpage";
import Dashboardhome from "../page/dashbord/Dashboard";
import Users from "../component/Allusers/Users";
import Products from "../component/Product_section/Products";
import Forgetpassword from "../page/UserAuthentication Page/Forgetpassword";
import ErrorPage from "../page/Errorpage/Errorpage";
// import PaymentConfirmation from "../page/payment/PaymentSuceess";
import PaymentFailedPage from "../page/payment/Paymentfailed";
import UpdateFrom from "../page/dashbord/updateProductform/UpdateProductform";
import PrivateRoute from "./PrivateRoute";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cart",
                element: <PrivateRoute><Mycart /></PrivateRoute>
            },
            {
                path: "/payment",
                element: <PaymentForm />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,

    },
    {
        path: '/singup',
        element: <Singup />
    },
    {
        path: 'forget_password',
        element: <Forgetpassword />
    },
    // {
    //     path: '/payment/success/:trnId',
    //     element: <PaymentConfirmation />
    // },
    {
        path: '/payment/failed',
        element: <PaymentFailedPage />
    },
    {
        path: '/dashboard',
        element: <Dashboardlayout />,
        children: [
            {
                path: '',
                element: <Dashboardhome />,
            },
            {
                path: 'users',
                element: <Users />,
            },
            {
                path: 'products',
                element: <Products />,
            },
            {
                path: 'products/:id',
                element: <UpdateFrom />,
            }
        ]
    },
])
export default routes;