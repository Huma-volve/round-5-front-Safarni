import { useMutation } from "@tanstack/react-query"
import {login} from "@/api/auth-api"
import { useNavigate } from "react-router-dom"

export default function useLogin() {
    const navigate = useNavigate()
  return (
    useMutation({
      mutationFn: login,
      onSuccess: () => {
        navigate("/")
      }
    })
  )
}
