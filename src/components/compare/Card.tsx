import { COMPARE_DATA } from '@/data/compare/compare'


function Card() {
  return (
    <div className='w-[100%] flex flex-wrap gap-4 justify-center mt-4'>
      {
        COMPARE_DATA.map((item)=>{
          return(
            <div key={item.id} className='flex gap-2 md:gap-3 items-center bg-compare-bg shadow-sm shadow-shadow md:p-2 rounded-[24px] w-68 text-[12px] md:text-[13px] text-input'>
              <img src={item.image} alt={item.title} className='w-28 rounded-[8px]'/>
             <div>
              <h2 className='text-[#0F1417] font-bold'>{item.title}</h2>
              <p>{item.duration} | ${item.price}</p>
              <p className='h-auto md:w-40'>{item.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card
