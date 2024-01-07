
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";

const useCart = () => {

    const { user, loading } = useContext(Authcontext)


    const { refetch, data, isLoading } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:3001/cart?email=${user?.email}`)
            const data = response.json()
            return data;
        }
    })
    return [refetch, data, isLoading];
}
export default useCart;