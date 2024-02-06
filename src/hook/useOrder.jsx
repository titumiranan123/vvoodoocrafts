import { useQuery } from "@tanstack/react-query";
const useOrder = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3001/payment`);
      const data = response.json();
      return data;
    },
  });
  return [data, refetch, isLoading];
};
export default useOrder;
