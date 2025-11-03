 import CarTicketCard from "@/components/my-booking/CarTicketCard/CarTicketCard";
import FlightTicketCard from "@/components/my-booking/FlightTicketCard/FlightTicketCard";
import HotelTicketCard from "@/components/my-booking/HotelTicketCard/HotelTicketCard";
import TourTicketCard from "@/components/my-booking/TourTicketCard/TourTicketCard";
import { Car, Plane, Globe, Bed} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";

interface Car {
  id: number;
  model: string;
  brand: string;
  daily_rate: string;
  seats: number;
  fuel_type: string;
  transmission: string;
}

export default function MyBooking() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  return (
 <main className="space-y-6 h-[calc(100vh-100px)]">
      <section className="py-8 space-y-6 container">
        <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-semibold">
          My Booking </h1>

        <div className="rounded-2xl shadow-sm border border-border bg-white p-6">
          <Tabs defaultValue="flight" className="w-full">
          <TabsList className="w-full  flex justify-between border-b py-2">
              <TabsTrigger
                value="flight"
                className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 px-4 py-2 text-gray-600 hover:text-blue-600 transition" >
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5" />
                  <span>Flight</span>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="car"
                className="data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 px-4 py-2 text-gray-600 hover:text-green-600 transition"
              >
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  <span>Cars</span>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="tour"
                className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 px-4 py-2 text-gray-600 hover:text-purple-600 transition"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>Tours</span>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="hotel"
                className="data-[state=active]:border-b-2 data-[state=active]:border-orange-600 data-[state=active]:text-orange-600 px-4 py-2 text-gray-600 hover:text-orange-600 transition" >
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5" />
                  <span>Hotel</span>
                </div>
              </TabsTrigger>
            </TabsList>

   <div className="py-6">
              <TabsContent value="flight">
                <FlightTicketCard />
              </TabsContent>
              <TabsContent value="car">
                <CarTicketCard 
                  selectedCar={selectedCar}
                  setSelectedCar={setSelectedCar}
                  pickupDate={pickupDate}
                  setPickupDate={setPickupDate}
                  returnDate={returnDate}
                  setReturnDate={setReturnDate}
                />
              </TabsContent>
              <TabsContent value="tour">
                <TourTicketCard />
              </TabsContent>
              <TabsContent value="hotel">
                <HotelTicketCard />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </main>) }
