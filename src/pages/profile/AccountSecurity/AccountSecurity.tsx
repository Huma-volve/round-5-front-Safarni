import { useMutation} from "@tanstack/react-query";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import { Link} from "react-router-dom";
import { toast } from "sonner";


export default function AccountSecurity() {
  const token = localStorage.getItem("token");
  const mutation = useMutation({
  
    mutationFn : async ()=>
      {
      const options = {
        method: "post",
        url: "https://round5-safarnia.huma-volve.com/api/profile/delete-account",
       headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json" },
      };
      const { data } = await axios.request(options);
       
      return data;
    },
 onSuccess: (data) => {
    toast.success("Account deleted successfully!");
    localStorage.removeItem("token"); 
    window.location.href = "/auth/signup"; 
  },
  onError: (error) => {
    toast.error("Something went wrong. Please try again.");
    console.error(error);
  },
    
  })
  return (
    <main className="h-[calc(100vh-100px)] flex items-center">
    
        <section className=' border my-12 py-6 border-red-700 rounded-md space-y-4 container'>
 <h1 className='text-center text-lg md:text-2xl lg:text-3xl font-semibold'>Account Security</h1>


<div className='space-y-4'>
  <Link to='/' className='shadow-sm rounded-md flex justify-between items-center px-3 py-2'>
   <div>
 <h2 className='font-semibold text-lg md:text-xl'>Device Management</h2>
    <p className='text-gray-500'>Manage your account on the various devices you own</p>
    </div>
<ChevronRight />
 </Link>
  <Link  to='/' className='shadow-sm rounded-md flex justify-between items-center px-3 py-2'>
   <div>
 <h2 className='font-semibold text-lg md:text-xl '>Deactivate Account</h2>
    <p className='text-gray-500'>Temporarily deactivate your account. Easily reactivate when you're ready.</p>
    </div>
<ChevronRight />
 </Link>

  <button onClick={()=>{mutation.mutate()}} className='w-full shadow-sm rounded-md flex justify-between items-center px-3 py-2'>
   <div>
 <h2 className='font-semibold text-lg md:text-xl text-left '>Delete Account</h2>
    <p className='text-gray-500'>Permanently remove your account and data from Tripmate. Proceed with caution.</p>
    </div>
<ChevronRight />
 </button>
  </div>
  </section> 
      
    </main>
  )
}
