import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Index";
import Loginpage from "../Loginpage/Loginpage";
import Singup from "../Singuppage/Singuppage";
import Mycart from "../page/Cart/Mycart";
import Dashboardlayout from "../Layout/Dashboardlayout";
import Dashboardhome from "../dashbord/Dashboard";
import Products from "../dashbord Coponent/Product_section/Products";
import PaymentForm from "../page/Payment/PaymentForm";
import Users from './../dashbord Coponent/Allusers/Users'



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
        element: <Loginpage />
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