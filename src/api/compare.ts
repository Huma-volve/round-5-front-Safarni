import axiosInstance from "@/lib/axios-instance";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const compareDetails=async(id:number)=>{
    try {
    const response = await axiosInstance.get(`tours/${id}`);
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage =
      axiosError.response?.data?.message || "failed";
    toast.error(errorMessage);
    throw error;
  }
}