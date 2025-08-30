import { tourBooking } from "@/api/tours-api"
import { useMutation } from "@tanstack/react-query"

function UseTourBooking() {
    return useMutation({
        mutationFn: tourBooking,
        mutationKey:["Tour_Booking"],
    })

}
export default UseTourBooking