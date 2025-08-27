import { bookTour } from "@/api/tours-api"
import { useMutation } from "@tanstack/react-query"

function UseTourBooking() {
    return useMutation({
        mutationFn: bookTour,
        mutationKey:["Tour_Booking"],
    })

}
export default UseTourBooking