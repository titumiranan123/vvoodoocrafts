import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Index";
import Loginpage from "../Loginpage/Loginpage";
import Singup from "../Singuppage/Singuppage";
import Mycart from "../page/Cart/Mycart";
// import Dashboard from "../dashbord/Dashboard";
import Users from "../dashbord Coponent/Allusers/Users";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Dashboardhome from "../dashbord/Dashboard";


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
        path: '/admin-dashboard',
        element: <Dashboard />,
    },
])
export default routes;