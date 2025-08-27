import { COMPARE_DATA_FEATURES } from '@/data/compare/compare'
import { Check, Link } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function CompareCard() {
  const navigate=useNavigate();
  const handelCheckout=()=>{
    navigate('/')
  }
  return (
    <>
    <div className='text-[24px] text-center text-[#333] font-medium mt-10 mb-4'>Compare</div>
    <div className='w-[100%] flex flex-wrap gap-4  justify-center '>
      {COMPARE_DATA_FEATURES.map((item) => {
        return <div key={item.id} className=' bg-compare-bg p-5 rounded-[24px] w-72 text-[13px] text-input text-[#000] p-2 border border-border rounded-[12px] bg-compare-bg text-[13px]'>
          <h2 className='text-[17px] font-medium'>{item.title}</h2>
          <p className='text-[32px] font-bold'>${item.price} <span className='text-input font-normal text-[14px]'>/ Person</span> </p>
          <p className='flex gap-3'><Check className='w-5'/>Duration: {item.duration}</p>
          <p className='flex gap-3'><Check className='w-5'/>Highlights: {item.highlight}</p>
          <p className='flex gap-3'><Check className='w-5'/>Availability:{item.avaliability}</p>
          <p className='flex gap-3'><Check className='w-5'/>Guide: {item.guides}</p>
          <p className='flex gap-3'><Check className='w-5'/>Transportation: {item.transportation}</p>
        </div>
      })}

    </div>
    <div className='w-[100%] flex justify-center '>
    <button onClick={handelCheckout} className='bg-input text-white py-2 w-64 md:w-80 mt-6 rounded-[8px] mb-16'>
      Checkout
    </button>
    </div>
    </>
  )
}

export default CompareCard
