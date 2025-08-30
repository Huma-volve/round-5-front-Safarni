import axiosInstance from "@/lib/axios-instance";

type confirmPaymentType = {
    payment_id:string,
    payment_method_id:string,
}

export async function confirmPayment(paymentDetails:confirmPaymentType) {
  const { data } = await axiosInstance.post("confirm", paymentDetails);
  return data;
}