import profile from '@/assets/profile.png'
import { Link, useNavigate } from 'react-router-dom'
import menuItems from '@/data/menuItems';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function Profile() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const { data } = useQuery({
    queryKey: ["car"],
  
    queryFn: async () => {
      const options = {
        method: "get",
        url: "https://round5-safarnia.huma-volve.com/api/profile",
       headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json" },
      };
      const { data } = await axios.request(options);
       console.log("profile data" , data)
      return data;
     
    },
  })
  return (
    <main className='space-y-4 py-5 my-8'>
    <section className='flex gap-4 items-center border py-4 border-red-700 rounded-md  container'>
 <div>
            <img src={profile} alt="profile" className='w-16 h-16 rounded-full object-cover' />
     </div>
       
        <div className='space-y-0.5'>
                <h2 className='font-semibold text-xl lg:text-2xl'>{data?.data?.user?.name}</h2>
                <p>{data?.data?.user?.email}</p> </div> 
                 </section>
    
    <section className=' border py-3 border-red-700 rounded-md space-y-4 container'>
{
menuItems.map((item, index)=>(
 <Link to={item.to}   key={index}
  className="shadow-sm py-3 rounded-md flex items-center gap-3 ">
    {item.icon}
  <h3 className='font-semibold sm:text-base text-lg lg:text-xl gap-3'>{item.label}</h3>
    
      </Link>
))
} 

<Dialog>
  <DialogTrigger > <div className=" shadow-sm py-3 rounded-md bg-white  flex items-center gap-3 w-full text-red-600">
            <LogOut  className="w-6 h-6" />
              <h3 className=" font-semibold sm:text-base text-lg lg:text-xl">
                Logout
              </h3>
            </div></DialogTrigger>
  <DialogContent>
    <DialogHeader className='space-y-6'>
      <DialogTitle className='text-center'>  Do You Want To Register The Exit Already ?</DialogTitle>
     
    <div className='flex justify-between gap-5'>
      <Button onClick={()=>{
            navigate('/auth/login')
      }} className=" w-full primary shadow-sm py-3 rounded-md flex items-center gap-3 ">
            
              <h4 className="font-semibold sm:text-base text-lg lg:text-xl">
                Yes, Log Me Out
              </h4>
</Button>
             <Button onClick={() => document.querySelector<HTMLButtonElement>("[data-state='open']")?.click()} className=" w-full primary shadow-sm py-3 rounded-md flex items-center gap-3 bg-white text-primary border border-primary ">
            
              <h4 className="font-semibold sm:text-base text-lg lg:text-xl">
                No </h4></Button>
</div>
    </DialogHeader>
  </DialogContent>
</Dialog>
</section> 
 </main>
  ) }


 