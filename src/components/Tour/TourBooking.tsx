import { useCheckoutContext } from "@/context/AppCheckoutProvider";
import { Button } from "../ui/button";
import useTourBooking from "@/hooks/Tours/useTourBooking";
import { toast } from "sonner";


type TourBookingType = {
  price: number,
  tour_slot_id: number,
  seats_count: number,
}

function TourBooking({ price, tour_slot_id, seats_count }: TourBookingType) {
  const {mutate, data, isPending, error} = useTourBooking()
  const { updateCheckout } = useCheckoutContext();

  //pass the booking data to mutate to book a tour, onSuccess get the booking id from res, update the checkout context
  function handleTourBooking() {
    mutate({tour_slot_id, seats_count, notes:"Special request"}, {
      onSuccess(res) {
        /* The Response contains the booking Data you can use it in checkout page if you want*/
        toast.success("Tour Booked Successfully")
        updateCheckout(res.id, "tour")
      },
      onError(error:any) {
        toast.error(error.response?.data?.message);
      }
    })
  }

  return (
    <div className="flex flex-col md:flex-row max-md:gap-3 items-center justify-around py-12 px-6 shadow-xl shadow-shadow max-md:mb-6 mt-3">
      <p className="font-bold">
        Total Price is: <span className="text-primary text-lg">{price}$</span> <span>/night</span>
      </p>
      <Button className="px-36" onClick={handleTourBooking}>Book Now</Button>
    </div>
  );
}
export default TourBooking;
