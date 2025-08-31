import { checkoutBooking } from "@/api/checkout-api"
import { useMutation } from "@tanstack/react-query"

function useCheckoutBooking() {
  return useMutation({
    mutationFn: checkoutBooking,
    mutationKey: ["checkout"]
  })
}
export default useCheckoutBooking