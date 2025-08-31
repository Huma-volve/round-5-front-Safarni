import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios-instance";
import { useNavigate } from "react-router-dom";

interface BookingData {
  car_id: number;
  pickup_date: number;
  return_date: number;
}

export function useCarBooking() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (bookingData: BookingData) => {
      const { data } = await axiosInstance.post("/bookings", bookingData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("Booking response:", data);
      return data;
    },
    onSuccess: () => {
      navigate("/payment");
    },
    onError: (error) => {
      console.error("Booking failed:", error);
    },
  });
}
