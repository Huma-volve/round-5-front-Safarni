import { useCheckoutContext } from "@/context/AppCheckoutProvider";
import { Button } from "../ui/button";
import UseTourBooking from "@/hooks/Tours/UseTourBooking";
import { toast } from "sonner";
import axios from "axios";

type TourBookingType = {
  price: number;
  tour_slot_id: number;
  seats_count: number;
};

function TourBooking({ price, tour_slot_id, seats_count }: TourBookingType) {
  const { mutate, isPending } = UseTourBooking();
  const { updateCheckout } = useCheckoutContext();

  function handleTourBooking() {
    mutate(
      { tour_slot_id, seats_count, notes: "Special request" },
      {
        onSuccess(res) {
          toast.success("Tour Booked Successfully");
          updateCheckout(res.id, "tour");
        },
        onError(error: unknown) {
          if (axios.isAxiosError(error)) {
            toast.error(error.response?.data?.message || "Booking failed");
          } else {
            toast.error("An unexpected error occurred");
          }
        },
      }
    );
  }

  return (
    <div className="flex flex-col md:flex-row max-md:gap-3 items-center justify-around py-12 px-6 shadow-xl shadow-shadow max-md:mb-6 mt-3">
      <p className="font-bold">
        Total Price is: <span className="text-primary text-lg">{price}$</span>{" "}
        <span>/night</span>
      </p>
      <Button className="px-36" onClick={handleTourBooking} disabled={isPending}>
        {isPending ? "Booking..." : "Book Now"}
      </Button>
    </div>
  );
}

export default TourBooking;
