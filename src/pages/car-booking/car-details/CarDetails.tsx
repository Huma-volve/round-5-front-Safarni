import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
 import { Calendar, Clock } from 'lucide-react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
export default function CarDetails() {
  const token= localStorage.getItem("token")
  const {id} = useParams()
    const {data} = useQuery({
        queryKey: ['car'],
        queryFn: async()=>{
            const options = {
                method: "get",
                url: `http://round5-safarnia.huma-volve.com/api/cars/${id}`,
               headers: {
                     Authorization: 
                     `Bearer ${token}`,}, }
            const {data} = await axios.request(options)
            return data
        }     
    })
  
  return (
     <main className="container">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 ">
       
        <div className="bg-[#F4F4F4] rounded-md flex justify-center items-center">
     
          <img
            src={data?.category?.image_url}
            loading="lazy"
            className="w-66 h-42 object-cover rounded-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <section className='space-y-6'>
          <div className="space-y-4">
            <h2 className="text-left font-semibold text-md">Popular Cars</h2>
            <div className="flex justify-between">
              <div className="p-2 border  border-gray-300 rounded-md">
                <h3>Power</h3>
                <span>429 hp @ 6,100 rpm</span>
              </div>

              <div className="p-2 border  border-gray-300 rounded-md">
                <h3>Power</h3>
                <span>429 hp @ 6,100 rpm</span>
              </div>

              <div className="p-2 border border-gray-300 rounded-md">
                <h3>Power</h3>
                <span>429 hp @ 6,100 rpm</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-left font-semibold text-md">Plan</h2>
           
        <RadioGroup defaultValue="10" className='space-y-2'>

  <div className="flex items-center space-x-2 w-full ">
  
    <Label htmlFor="option-10 " className='w-full'>
       <Card className="flex items-center gap-3 p-4 cursor-pointer w-full">
          <RadioGroupItem value="10" id="option-10"  />
          <div className="flex flex-col">
            <div className="flex items-center gap-2 space-y-2">
              <Clock className="w-4 h-4 text-gray-600" />
              <span className="font-semibold">$10</span>
            </div>
            <span className="text-sm text-gray-500">Hourly Rent - Best for business appointments</span>
          </div>
        </Card>
     </Label>
  </div>
  
  <div className="flex items-center space-x-2">
<Label htmlFor="option-80" className='w-full'>
      <Card className="flex items-center gap-3 p-4 cursor-pointer w-full">
          <RadioGroupItem value="80" id="option-80" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2 space-y-2">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="font-semibold">$80</span>
            </div>
            <span className="text-sm text-gray-500">Hourly Rent - Best for business appointments</span>
          </div>
        </Card></Label>

  </div>
</RadioGroup>
          </div>

          <div className='space-y-4 '>
       <div className="space-y-2">
             <Label htmlFor="location" className='text-md font-semibold '>Location</Label>
         <Input id="location" className='px-2' placeholder='200-298 Clipper St San Francisco'/>
       
       </div>
             <Button className='bg-[#1E429F] w-full hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all'>Pick Up</Button>
          </div>
</section>
      </section>
     </main>
  

);
}
