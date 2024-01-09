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



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cart",
                element: <Mycart />
            },
            {
                path: "/payment",
                element: <PaymentForm />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/singup',
        element: <Singup />
    },
    {
        path: '/payment/success/:trnId',
        element: <div>success</div>
    },
    {
        path: '/payment/failed',
        element: <div>failed</div>
    },
    {
        path: '/payment/cancel',
        element: <div>cancel</div>
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
            }
        ]
    },
])
export default routes;