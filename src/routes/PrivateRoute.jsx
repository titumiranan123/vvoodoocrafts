import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";

import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(Authcontext)
    const location = useLocation()
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;