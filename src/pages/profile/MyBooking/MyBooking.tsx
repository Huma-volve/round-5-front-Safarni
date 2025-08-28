 import CarTicketCard from "@/components/my-booking/CarTicketCard/CarTicketCard";
import FlightTicketCard from "@/components/my-booking/FlightTicketCard/FlightTicketCard";
import HotelTicketCard from "@/components/my-booking/HotelTicketCard/HotelTicketCard";
import TourTicketCard from "@/components/my-booking/TourTicketCard/TourTicketCard";
import { Car, Plane, Globe, Bed} from "lucide-react";

export default function MyBooking() {
  return (
    <main className="space-y-6 ">
   <section className=' py-8   space-y-4 container'>
 <h1 className='text-center text-lg md:text-2xl lg:text-3xl font-semibold'>My Booking</h1>


<div  className='space-y-4 flex justify-between container'>
  
<div className="flex items-center gap-3  ">
    <Plane className="w-5 h-5 shrink-0 text-blue-600" />
    <h2 className="text-lg font-medium">Flight</h2>
  </div>

  <div className="flex items-center gap-3  ">
    <Car className="w-8 h-8 shrink-0 text-green-600" />
    <h2 className="text-lg font-medium">Cars</h2>
  </div>

  <div className="flex items-center gap-3  ">
    <Globe className="w-6 h-6 shrink-0 text-purple-600" />
    <h2 className="text-lg font-medium">Tours</h2>
  </div>

  <div className="flex items-center gap-3 ">
    <Bed className="w-6 h-6 shrink-0 text-orange-600" />
    <h2 className="text-lg font-medium">Hotel</h2>
  </div>
</div>


</section>

<FlightTicketCard/>
<CarTicketCard/>
<TourTicketCard/>
<HotelTicketCard/>


    </main>
  )
}
