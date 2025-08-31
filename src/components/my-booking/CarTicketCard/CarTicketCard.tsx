import car from '@/assets/car.png'

export default function CarTicketCard() {
  return (
    <>
      <div className="border rounded-lg shadow-sm flex justify-between items-center p-4 bg-white w-full container">
 
      <div>
        <h2 className="font-semibold text-gray-800">S 500 Sedan</h2>
        <div className="flex gap-4 text-xs text-gray-500 mt-2">
          <span>Automatic</span>
          <span>5 Seats</span>
          <span>Diesel</span>
        </div>
      </div>
 <img
        src={car}
        alt="Car"
        className="w-32 h-32 object-contain"
      />
    </div>
    
    </>
  )
}
