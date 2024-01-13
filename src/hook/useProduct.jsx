
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";

const useProduct = () => {

    const { loading } = useContext(Authcontext)


    const { data, refetch, isLoading } = useQuery({
        queryKey: ['Product'],
        enabled: !loading,
        queryFn: async () => {
            // const response = await fetch(`https://chamrabari-backend.vercel.app/products`)
            const response = await fetch(`http://localhost:3001/products`)
            const data = response.json()
            return data;
        }
    })
    return [data, refetch, isLoading];
}
export default useProduct;