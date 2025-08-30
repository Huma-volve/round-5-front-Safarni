import axiosInstance from "@/lib/axios-instance";

export async function checkoutBooking({booking_id, booking_type}:any) {
    try {
        const {data} = await axiosInstance.post(`checkout?booking_id=${booking_id}&booking_type=${booking_type}`)
        return data
    } catch (error) {
        throw error
    }
}