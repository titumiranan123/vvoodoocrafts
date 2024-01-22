import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "./features/userSlice";
import Loader from "./component/Utilitis/Loader";


const App = ({ children }) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.user.isLoading)
    console.log(isLoading)
    const token = localStorage.getItem("token")
    useEffect(() => {
        const isUser = localStorage.getItem("user");
        console.log(JSON.parse(isUser))
        if (isUser) {
            dispatch(setUser({ user: JSON.parse(isUser) }))
            console.log(isUser)
            dispatch(setLoading(false))
            return
        }
        if (token) {
            fetch(`https://chamrabari.vercel.app/api/v1/loggeduser`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    dispatch(setLoading(false))
                })
        }
        dispatch(setLoading(false))
    }, [token, dispatch])
    return <>{isLoading ? <Loader /> : children}</>
};

export default App;