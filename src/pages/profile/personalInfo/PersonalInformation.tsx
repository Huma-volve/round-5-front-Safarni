import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import personalInfo from '@/data/personalInfo'

export default function PersonalInformation() {
  return (
    <>
     <section className=' border py-8 border-red-700 rounded-md space-y-4 container'>
 <h1 className='text-center text-lg md:text-2xl lg:text-3xl font-semibold'>personal information</h1>


<div className='space-y-4'>
  {personalInfo.map((item) => (
    <div key={item.label} className="space-y-2">
      <Label>{item.label}</Label>
      <Input placeholder={item.placeholder} />
    </div>
  ))}
  </div>
  </section> 
      
    
    </>
  )
}

