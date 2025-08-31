import { Button } from "@/components/ui/button";
import { useCheckoutContext } from "@/context/AppCheckoutProvider";
import useCheckoutBooking from "@/hooks/Checkout/useCheckoutBooking";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function CheckoutPage() {
  const { checkoutData } = useCheckoutContext();
  const { mutate } = useCheckoutBooking();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(checkoutData);
  }, [checkoutData])

//  temporary test the checkout sending payment_id client_secret to payment using navigation state with a setTimeout
  // setTimeout(() => {
  //   navigate("/payment", {
  //     state: {
  //         payment_id: "7",
  //         client_secret: "pi_3S0XIT00Xq5cUHDc0gTeU98Z_secret_53dqpgxrvDaBBxX2vEhjtxGmh",
  //     },
  //   });
  // }, 2000);

  function handleCheckout() {
    mutate(checkoutData, {
      onSuccess: (data) => {

        console.log(data);

        toast.success("Your booking checked out successfully");
        setTimeout(()=>{
          navigate("/payment", { state:  data.data });
        },2000)
      },
      onError(error:any) {
        toast.error(error.response?.data?.message);
      }
    });
  }
  return (
    <div>
      {/* Here is a checkout page (cart like) but for booking can only checkout one type of booking */}
      <p>You are checking out a {checkoutData.booking_type}</p>
      <Button onClick={handleCheckout}>Check out</Button>
    </div>
  );
}
export default CheckoutPage;
