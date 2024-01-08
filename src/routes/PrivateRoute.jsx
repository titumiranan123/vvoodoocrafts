import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(Authcontext)
    if (!user) {

        Swal.fire({
            title: "Custom animation with Animate.css",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
            }
        });

    }
    return children;
};

export default PrivateRoute;