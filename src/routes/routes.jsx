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
import UpdateFrom from "../page/dashbord/updateProductform/UpdateProductform";
import PrivateRoute from "./PrivateRoute";
import AllProducts from "../page/Allproduct/AllProducts";
import Productlayout from "../Layout/Productlayout";
import CategoryProduct from "../page/CategoryProduct/CategoryProduct";



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
                path: "/shop",
                element: <Productlayout />,
                children: [
                    {
                        path: 'allproduct',
                        element: <AllProducts />
                    },
                    {
                        path: 'category/:catId/:subcate',
                        element: <CategoryProduct />,
                        // loader: ({ params }) => [params.catId, params.subcate]
                    },

                ]
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
    {
        path: '/payment/success/:trnId',
        element: <div>success</div>
    },
    {
        path: '/payment/failed',
        element: <div>failed</div>
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