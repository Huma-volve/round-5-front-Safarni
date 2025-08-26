import { COMPARE_DATA } from '@/data/compare/compare'


function Card() {
  return (
    <div className='flex flex-wrap gap-4  mt-10'>
      {
        COMPARE_DATA.map((item)=>{
          return(
            <div key={item.id} className='flex gap-3 items-center bg-[#FAFAFA] shadow-sm shadow-[#D1D5DB] p-2 rounded-[24px] w-[350px] text-[15px] text-[#6B7280]'>
              <img src={item.image} alt={item.title} className='w-28 rounded-[8px]'/>
             <div>
              <h2 className='text-[#0F1417] font-medium'>{item.title}</h2>
              <p>{item.duration} | ${item.price}</p>
              <p>{item.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card
