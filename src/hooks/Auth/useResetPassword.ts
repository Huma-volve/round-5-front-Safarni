import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/api/auth-api";
import { useNavigate } from "react-router-dom";

export default function useResetPassword() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: resetPassword,
    onSettled: () => {
      navigate("/auth/reset-password-success");
    },
  });
}


