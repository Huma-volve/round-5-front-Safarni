import axiosInstance from "@/lib/axios-instance";
import { useQuery } from "@tanstack/react-query";


export  function useCarBookingHome() {
  return  useQuery({
    queryKey: ["cars"],
       refetchOnWindowFocus: true,   
  refetchOnMount: true,
    queryFn: async () => {
     
      const { data } = await axiosInstance.get('/cars');
      console.log("car book" , data);
      
      return data;
    },
  });
}
  