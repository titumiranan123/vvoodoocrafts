import { useQuery } from "@tanstack/react-query"
const useProducts = () => {

    const { data, refetch, isLoading } = useQuery({
        queryKey:  ['products'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3001/products`)
            const data = response.json()
            return data;
        }
    })
    return [data, refetch, isLoading];
}
export default useProducts;