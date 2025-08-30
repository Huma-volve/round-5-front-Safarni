import { Plane } from "lucide-react";
import canada from '@/assets/images/canada.png'
export default function FlightTicketCard() {
  return (
    <>
    
     <div className="container mt-6 rounded-lg border border-red-300 bg-white shadow-sm">
    <div className="flex justify-between items-start px-6 pt-4">
       <div className="flex items-center gap-2">
          <img
            src={canada}
            alt="Air Canada"
            className="w-8 h-8 object-contain" />
          <span className="text-sm text-gray-600">Air Canada</span>
        </div>

     <span className="text-sm text-gray-800 font-medium">
          December 16th, 2022
        </span>
      </div>

   <div className="flex justify-between items-center px-6 py-4">
     <div className="text-left">
          <p className="text-xl font-bold">07h05</p>
          <p className="text-sm text-gray-500">YUL</p>
        </div>

     <div className="flex flex-col items-center text-gray-500">
          <Plane className="w-5 h-5 mb-1" />
          <span className="text-xs">13h00</span>
        </div>

        <div className="text-right">
          <p className="text-xl font-bold">20h05</p>
          <p className="text-sm text-gray-500">NRT</p>
        </div>
      </div>

 <div className="border-t border-gray-200" />

   <div className="grid grid-cols-4 gap-4 px-6 py-3 text-center text-sm">
        <div>
          <p className="font-medium">8</p>
          <p className="text-gray-500 text-xs">Gate</p>
        </div>
        <div>
          <p className="font-medium">6</p>
          <p className="text-gray-500 text-xs">Seat</p>
        </div>
        <div>
          <p className="font-medium">3</p>
          <p className="text-gray-500 text-xs">Terminal</p>
        </div>
        <div>
          <p className="font-medium">AC006</p>
          <p className="text-gray-500 text-xs">Flight</p>
        </div>
      </div>
    </div>
    
    </>
  )
}
