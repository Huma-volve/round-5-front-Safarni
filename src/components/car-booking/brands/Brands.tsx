import brand from '../../../assets/8ea8b55d46bb76d52afbaed4c4b3a2568954efc9.png'

export default function Brands() {
  return (
    <>
  <div className='px-6 py-4 shadow-md rounded-xl bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center gap-3'>
  <img 
    src={brand} 
    alt="brand logo" 
    loading='lazy' 
    className='w-20 h-16 object-cover rounded-md hover:scale-105 transition-transform duration-300'
  />
  <h2 className='font-semibold text-lg md:text-xl text-gray-800'>Mercedes</h2>
  <h4 className='text-sm text-[#1E429F]'>+22</h4>
</div>

    </>
  )
}
