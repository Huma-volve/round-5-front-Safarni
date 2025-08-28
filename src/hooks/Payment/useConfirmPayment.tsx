import { confirmPayment } from "@/api/payment-api"
import { useMutation } from "@tanstack/react-query"

function useConfirmPayment() {
    return useMutation({
        mutationFn: confirmPayment,
        mutationKey:["confirm_payment"],
    })

}
export default useConfirmPayment