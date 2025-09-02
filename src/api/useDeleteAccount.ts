import axiosInstance from "@/lib/axios-instance";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeleteAccount() {
  return useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstance.post("/profile/delete-account");
      return data;
    },
    onSuccess: () => {
      toast.success("Account deleted successfully!");
      localStorage.removeItem("token");
      window.location.href = "/auth/signup";
    },
    onError: (error) => {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    },
  });
}
