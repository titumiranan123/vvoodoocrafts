
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";

const useCart = () => {
    // const [data, setData] = useState([])
    const { user, loading } = useContext(Authcontext)


    const { refetch, data } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:3001/cart?email=${user?.email}`);
            return response.data;
        }
    })
    return [refetch, data];
}
export default useCart;