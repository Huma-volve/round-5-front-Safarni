import axiosInstance from "@/lib/axios-instance";

export async  function checkoutBooking({booking_id, booking_type}:any) {
    const {data} = await axiosInstance.post(`checkout?booking_id=${booking_id}&booking_type=${booking_type}`)
    return data
}