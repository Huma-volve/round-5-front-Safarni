import { MapPin, Star } from "lucide-react";
import tour from '@/assets/images/tour.jpg'
export default function TourTicketCard() {
  return (
    <>
    <div className="border rounded-lg shadow-sm flex items-center gap-3 p-3 bg-white w-full container">
  <img
        src={tour}
        alt="Golden Valley"
        className="w-32 h-32 rounded-lg object-cover"
      />

    <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
            Travel
          </span>
          <div className="flex items-center text-yellow-500 text-xs">
            <Star className="w-4 h-4 fill-yellow-500" />
            <span className="ml-1 text-gray-700">4.3</span>
          </div>
        </div>

        <h2 className="font-semibold text-gray-800 text-sm mt-1">
          Golden Valley
        </h2>

        <div className="flex items-center gap-1 text-xs text-gray-500">
          <MapPin className="w-3 h-3" />
          <span>New York, USA</span>
        </div>
      </div>
    </div>
    
    </>
  )
}
