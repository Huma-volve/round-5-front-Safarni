import { useMutation } from "@tanstack/react-query";
import { forgetPassword } from "@/api/auth-api";
import { useNavigate } from "react-router-dom";

export default function useForget() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: forgetPassword,
    onSuccess: () => {
      navigate("/auth/verify-code", { state: { email: localStorage.getItem("email") } });
    },
  });
}
