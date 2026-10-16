import car from '@/assets/car.png'
import { Button } from '@/components/ui/button'
import { Dispatch, SetStateAction } from 'react';
interface Car {
  id: number;
  model: string;
  brand: string;
  daily_rate: string;
  seats: number;
  fuel_type: string;
  transmission: string;}

type CarTicketCardProps = {
  showConfirm?: boolean;
  onConfirm?: () => void; 
   selectedCar: Car | null;
  setSelectedCar: Dispatch<SetStateAction<Car | null>>;
  pickupDate: Date | null;
  setPickupDate: Dispatch<SetStateAction<Date | null>>;
  returnDate: Date | null;
  setReturnDate: Dispatch<SetStateAction<Date | null>>;
}
export default function CarTicketCard({ 
   showConfirm = false,
  onConfirm,
  selectedCar,
  setSelectedCar,
  pickupDate,
  setPickupDate,
  returnDate,
  setReturnDate,

}:CarTicketCardProps) {

  return (
    <>
      <div className="border rounded-lg shadow-sm  p-4 bg-white w-full container">
 
     <div className="flex justify-between items-center">
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
{
  showConfirm   &&  <>
 
<div className="flex gap-2 mb-4 justify-center items-center">
  <input
    type="date"
    value={pickupDate ? pickupDate.toISOString().split("T")[0] : ""}
    onChange={(e) => setPickupDate(new Date(e.target.value))}
    className="border p-2 rounded"
  />
  <input
    type="date"
    value={returnDate ? returnDate.toISOString().split("T")[0] : ""}
    onChange={(e) => setReturnDate(new Date(e.target.value))}
    className="border p-2 rounded"
  />
</div>
 <div className='w-full container'>
    <Button   onClick={onConfirm} className='w-full block text-center bg-[#1E429F] hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all justify-center'>Confirm</Button>
</div>
</>
}

      
    </div>
   
    </>
  )
}
