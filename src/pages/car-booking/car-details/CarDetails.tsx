import { Card } from '@/components/ui/card';
 import { Calendar, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import carImages from "@/data/CarImages";
import { useCarDetails } from '@/api/car-deails';

export default function CarDetails() {
    const { id } = useParams();
  const carId = Number(id);
  const carImage = carImages.find((img) => img.id === carId);
  const { data } = useCarDetails(carId);
  return (
    <main className="container h-[calc(100vh-100px)] flex items-center">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 ">
        <div className="bg-white rounded-md flex justify-center items-center">
          <img
            src={carImage?.url}
            loading="lazy"
            className="w-66 h-42 object-cover rounded-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-left font-semibold text-md">Popular Cars</h2>
            <div className="grid grid-cols-3 gap-4 ">
              <div className="p-2 text-center border  border-gray-300 rounded-md">
                <h3 className="text-base lg:text-lg font-semibold">
                  Transmission
                </h3>
                <span>{data?.transmission}</span>
              </div>

              <div className="p-2 text-center border  border-gray-300 rounded-md">
                <h3 className="text-base lg:text-lg font-semibold">
                  Fuel Type
                </h3>
                <span>{data?.fuel_type}</span>
              </div>

              <div className="text-center p-2 border border-gray-300 rounded-md">
                <h3 className="text-base lg:text-lg font-semibold">
                  Daily rate
                </h3>
                <span>{data?.daily_rate}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-4">
              <h2 className="text-left font-semibold text-md">Plan</h2>

              <div className="grid gap-3">
                <Card className="flex items-center gap-3 p-4 bg-blue-50">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-blue-700">$10</span>
                    <span className="text-sm text-gray-600">
                      Hourly Rent - Best for business appointments
                    </span>
                  </div>
                </Card>

                <Card className="flex items-center gap-3 p-4 bg-green-50">
                  <Calendar className="w-6 h-6 text-green-600" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-green-700">$80</span>
                    <span className="text-sm text-gray-600">
                      Daily Rent - Best for longer trips
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <Link to='/MapWithRoute'  state={{ selectedCar: data }} className="w-full block text-center bg-[#1E429F] hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all">
              Pick Up
            </Link >
          </div>
        </section>
      </section>
    </main>
  );
}
