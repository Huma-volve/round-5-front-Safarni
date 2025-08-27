import { useCheckoutContext } from "@/context/AppCheckoutProvider";
import { Button } from "../ui/button";
import UseBookTour from "@/hooks/Tours/UseTourBooking";

type TourBookingType = {
  price: number,
  tour_slot_id: number,
  seats_count: number,
}

function TourBooking({ price, tour_slot_id, seats_count }: TourBookingType) {
  const {mutate, data, isPending, error} = UseBookTour()
  const { updateCheckout } = useCheckoutContext();

  //pass the booking data to mutate to book a tour, onSuccess get the booking id from res, update the checkout context
  function handleTourBooking() {
    mutate({tour_slot_id, seats_count}, {
      onSuccess(res) {
        updateCheckout(res.data.id, "tour")
      }
    })
  }

  return (
    <div>
      <p>
        Total Price is: <span>{price}</span> <span>/night</span>
      </p>
      <Button onClick={handleTourBooking}>Book Now</Button>
    </div>
  );
}
export default TourBooking;
