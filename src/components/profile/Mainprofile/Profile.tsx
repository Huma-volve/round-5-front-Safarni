import profile from '@/assets/profile.png'
import { Link } from 'react-router-dom'
import menuItems from '@/data/menuItems';
// import {
//   AlertDialog,
//   AlertDialogTrigger,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogCancel,
//   AlertDialogAction,
// } from "@radix-ui/react-alert-dialog";

export default function Profile() {
  return (
    <main className='space-y-4 pt-6 pb-8'>
    <section className='flex gap-4 items-center border py-4 border-red-700 rounded-md  container'>
 <div>
            <img src={profile} alt="profile" className='w-16 h-16 rounded-full object-cover' />
     </div>
       
        <div className='space-y-0.5'>
                <h2 className='font-semibold text-xl lg:text-2xl'>Knee Due</h2>
                <p>kneedue@gmail.com</p> </div> 
                 </section>
    
    <section className=' border py-3 border-red-700 rounded-md space-y-4 container'>
{
menuItems.map((item, index)=>(
 <Link to={item.to}   key={index}
  className={`shadow-sm py-3 rounded-md flex items-center gap-3 ${
            item.danger ? "text-red-600" : ""}`}>
    {item.icon}
  <h3 className='font-semibold sm:text-base text-lg lg:text-xl gap-3'>{item.label}</h3>
    
      </Link>
))
} </section> 
 </main>
  ) }


 