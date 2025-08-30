import axiosInstance from "@/lib/axios-instance";

type confirmPaymentType = {
    payment_id:string,
    payment_method_id:string,
}

export async function confirmPayment(paymentDetails:confirmPaymentType) {
  console.log(paymentDetails);
  const { data } = await axiosInstance.post("checkout/confirm", paymentDetails);
  return data;
}