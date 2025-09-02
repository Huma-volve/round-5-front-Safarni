import { useCompareDetails } from '@/hooks/Tours/UseTour';
import { Check, Link } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import Loading from "@/components/common/Loading";


function CompareCard({ tourId }: { tourId: number }) {
  const navigate = useNavigate();
  const handelCheckout = () => {
    navigate('/')
  }
  const { data, isLoading, isError, error } = useCompareDetails(tourId);
  if (isLoading) return <Loading />

  if (isError) return <div className='text-red-500'>{error?.message}</div>
  const item = data?.data?.data;
  console.log("compare data", item);
  if (!item) return <div>No Data Found</div>
  console.log("item", item);
  return (
    <div className=' bg-compare-bg p-5 rounded-[24px] w-72 text-[13px] text-input text-[#000] p-2 border border-border rounded-[12px] bg-compare-bg text-[13px]'>
      <h2 className='text-[17px] font-medium'>{item.title}</h2>
      <p className='text-[32px] font-bold'>${item.price} <span className='text-input font-normal text-[14px]'>/ Person</span> </p>
      <p className='flex gap-3'><Check className='w-5' />Duration: {item.duration}</p>
      <p className='flex gap-3'><Check className='w-5' />Highlights: {item.highlights[0]}</p>
      <p className='flex gap-3'><Check className='w-5' />Availability:{item.slots ? " Available" : " not Avaliable"}</p>
      <p className='flex gap-3'><Check className='w-5' />Guide: {item.guide}</p>
      <p className='flex gap-3'><Check className='w-5' />Transportation: {item.transportation}</p>
    </div>

  )
}

export default CompareCard
