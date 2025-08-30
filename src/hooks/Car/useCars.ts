import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { CarData } from "@/types/CarDataTypes";

export function useCars() {
  const token = localStorage.getItem("token");

  const { data: cars = [],isLoading,isError, error, } = useQuery<CarData[]>({
    queryKey: ["cars"],
queryFn: async () => {
      const options = {
        method: "get",
        url: "https://round5-safarnia.huma-volve.com/api/cars",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.request(options);
      return data;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

  return { cars, isLoading, isError, error };
}
