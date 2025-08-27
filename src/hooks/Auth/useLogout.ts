import { useMutation } from "@tanstack/react-query"
import {logout} from "@/api/auth-api"
import { useNavigate } from "react-router-dom"

export default function useLogout() {
    const navigate = useNavigate()
  return (
    useMutation({
      mutationFn: logout,
      onSuccess: () => {
        navigate("/auth/welcome")
      }
    })
  )
}
