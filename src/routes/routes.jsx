import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Index";
import Loginpage from "../Loginpage/Loginpage";
import Singup from "../Singuppage/Singuppage";
import Mycart from "../page/Cart/Mycart";

import Dashboardlayout from "../Layout/Dashboardlayout";
import Dashboardhome from "../dashbord/Dashboard";
import Products from "../dashbord Coponent/Product_section/Products";



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
        path: '/dashboard',
        element: <Dashboardlayout />,
        children: [
            {
                path: '',
                element: <Dashboardhome />,
            },
            {
                path: 'users',
                element: <p>users</p>,
            },
            {
                path: 'products',
                element: <Products />,
            }
        ]
    },
])
export default routes;