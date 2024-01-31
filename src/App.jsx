import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading, logout } from "./features/userSlice";
import Loader from "./component/Utilitis/Loader";
import Swal from "sweetalert2";


const App = ({ children }) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.user.isLoading)
    console.log(isLoading)
    const token = localStorage.getItem("token")
    useEffect(() => {
        // const isUser = localStorage.getItem("user");
        // if (isUser) {
        //     dispatch(setUser({ user: JSON.parse(isUser) }))
        //     dispatch(setLoading(false))
        //     return
        // }
        if (token) {
            fetch(`http://localhost:3001/api/v1/loggeduser`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    dispatch(setUser({ user:(data.user) })),
                    dispatch(setLoading(false))
                    if(data==='token expired'){
                        dispatch(logout())
                        Swal.fire(
                            'Warning!',
                            'Login expired',
                            'Warning'
                        )
                    }
                    
                })
        }
        dispatch(setLoading(false))
    }, [token, dispatch])
    return <>{isLoading ? <Loader /> : children}</>
};

export default App;