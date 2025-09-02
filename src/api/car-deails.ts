// hooks/useCarDetails.ts
import axiosInstance from "@/lib/axios-instance";
import { useQuery } from "@tanstack/react-query";


export const useCarDetails = (carId: number | string) => {
  return useQuery({
    queryKey: ["car", carId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/cars/${carId}`);
      console.log("car details", data);
      return data;
    },
  });
};
