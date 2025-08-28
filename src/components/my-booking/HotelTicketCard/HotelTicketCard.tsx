import hotel from '@/assets/images/hotel.jpg'

export default function HotelTicketCard() {
  return (
    <>
  
    <div className="border rounded-lg shadow-sm flex items-center gap-3 p-3 bg-white w-full container">
 
      <img
        src={hotel}
        alt="Luxor"
        className="w-32 h-32 rounded-lg object-cover"
      />


      <div className="flex flex-col">
        <h2 className="font-semibold text-gray-800 text-sm">Full Day Tour</h2>
        <p className="text-xs text-gray-500">Luxor</p>
        <span className="text-xs text-blue-600 font-medium mt-1">
          From 150$ Per Person
        </span>
      </div>
    </div>
    
    </>
  )
}
