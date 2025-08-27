import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/api/auth-api";
import { useNavigate } from "react-router-dom";

export default function useSignUp() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      navigate("/");
    },
  });
}
