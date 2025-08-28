import Brands from '@/components/car-booking/brands/Brands'
import PopularCarsCard from '@/components/car-booking/popular-cars-card/PopularCarsCard'
import { CarData } from '@/types/CarDataTypes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function CarBookingHome() {
 const token= localStorage.getItem("token")
    const {data} = useQuery({
        queryKey: ['car'],
        queryFn: async()=>{
            const options = {
                method: "get",
                url: "http://round5-safarnia.huma-volve.com/api/cars",
                headers: {
                    Authorization : `bearer${token}`
                } }
            const {data} = await axios.request(options)
            return data
        }     
    })
  return (
    <>
     <div className='space-y-8 container mx-auto my-8'>

        <div className="flex gap-4 justify-between">
   <Brands/>
   <Brands/>
   <Brands/>
   <Brands/>
   <Brands/>
   <Brands/>
   <Brands/>
 
 </div>

    <div className='grid grid-cols-1 md:grid-cols-2 space-y-4  md:space-y-6 gap-4 lg:gap-6'>
     {
        data?.map((item:CarData)=>(
    <PopularCarsCard item={item} key={item.id} />)) }
</div>
 

  </div>

    </>
  )
}
