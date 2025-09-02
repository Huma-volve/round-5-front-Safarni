
import axiosInstance from "@/lib/axios-instance";
import { useQuery } from "@tanstack/react-query";


export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/profile");
      console.log("profile data", data);
      return data;
    },
  });
};
