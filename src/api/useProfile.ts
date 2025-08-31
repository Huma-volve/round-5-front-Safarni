import axiosInstance from "@/lib/axios-instance";
import { useQuery } from "@tanstack/react-query";


export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/profile");
      return data;
    },
  });
}
