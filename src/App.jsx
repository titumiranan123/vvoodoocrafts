import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading, logout } from "./features/userSlice";
import Loader from "./component/Utilitis/Loader";
import Swal from "sweetalert2";


const App = ({ children }) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.user.isLoading)
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (token) {
            fetch(`http://localhost:3001/api/v1/loggeduser`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                dispatch(setUser({ user: data.user })),
                dispatch(setLoading(false))
                if (data === 'token expired') { // This condition seems incorrect
                    dispatch(logout())
                    Swal.fire(
                        'Warning!',
                        'Login expired',
                        'success'
                    )
                }
            })
            .catch(error => {
                console.error("Error fetching user:", error);
                dispatch(setLoading(false)); // Ensure setLoading(false) is called even on error
            });
        } else {
            dispatch(setLoading(false)); // Ensure setLoading(false) is called if no token is present
        }
    }, [token, dispatch]);
    
    return <>{isLoading ? <Loader /> : children}</>
};

export default App;