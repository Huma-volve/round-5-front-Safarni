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
  const { updateData } = useCheckoutContext();

  function handleTourBooking() {
    mutate({tour_slot_id, seats_count})
    updateData(data.id, "tour")
    console.log(price, tour_slot_id, seats_count);
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
