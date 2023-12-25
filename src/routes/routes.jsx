import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Index";
import Loginpage from "../Loginpage/Loginpage";
import Singup from "../Singuppage/Singuppage";
import Mycart from "../page/Cart/Mycart";


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
])
export default routes;