import { useMutation } from "@tanstack/react-query";
import { verifyCode } from "@/api/auth-api";
import { useNavigate } from "react-router-dom";

export default function useVerifyCode() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: verifyCode,
    // onSuccess: (data, variables) => {
    //   navigate("/auth/reset-password", { 
    //     state: { 
    //       email: variables.email,
    //       otp: variables.otp 
    //     } 
    //   });
    // },
    onSettled: () => {
      navigate("/auth/reset-password"
      );
    },
  });
}
