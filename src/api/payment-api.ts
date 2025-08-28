import axiosInstance from "@/lib/axios-instance";


type confirmPaymentType = {
    booking_id:string,
    payment_method_id:string,
}

export async function confirmPayment(paymentData:confirmPaymentType) {
  const { data } = await axiosInstance.post("confirm");
  return data;
}