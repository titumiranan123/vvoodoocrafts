
import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"


const useCart = () => {

    const user = useSelector(state => state.user.user)

    const { data, refetch, isLoading } = useQuery({
        queryKey: user?.email && ['cart', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                return null;
            }
            const response = await fetch(`http://localhost:3001/api/v1/cart?email=${user?.email}`,
                {
                    method: 'GET',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                })
            const data = response.json()
            return data;
        }
    })
    return [data, refetch, isLoading];
}
export default useCart;