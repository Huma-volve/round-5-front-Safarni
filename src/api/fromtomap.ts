import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios-instance";
import { useNavigate } from "react-router-dom";
import { useCheckoutContext } from "@/context/AppCheckoutProvider";
interface BookingData {
  car_id: number;
  pickup_date: string;
  return_date: string;
}

 

export function useCarBooking() {
    const { updateCheckout } = useCheckoutContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (bookingData: BookingData) => {
          console.log("Sending booking data:", bookingData);

      const { data } = await axiosInstance.post("/bookings", bookingData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("Booking response:", data);
   
      return data;
    },
    onSuccess: (data , variables) => {
       updateCheckout(data.id, "car"); 
    navigate("/payment" , {
        state: {
    car_id: variables.car_id,
    pickup_date: variables.pickup_date,
    return_date: variables.return_date,
    booking_type: "car",
    booking_id : data.id  
  },
    });
    },
    onError: (error) => {
      console.error("Booking failed:", error);
    },
  });
}
