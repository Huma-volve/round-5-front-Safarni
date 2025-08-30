import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AccountSecurity() {
  return (
    <>
    
        <section className=' border my-12 py-4 border-red-700 rounded-md space-y-4 container'>
 <h1 className='text-center text-lg md:text-2xl lg:text-3xl font-semibold'>Account Security</h1>


<div className='space-y-4'>
  <p  className='font-semibold text-lg md:text-xl'>Biometric ID</p>
  <p  className='font-semibold text-lg md:text-xl'>Face ID</p>

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
  <Link to='/' className='shadow-sm rounded-md flex justify-between items-center px-3 py-2'>
   <div>
 <h2 className='font-semibold text-lg md:text-xl '>Delete Account</h2>
    <p className='text-gray-500'>Permanently remove your account and data from Tripmate. Proceed with caution.</p>
    </div>
<ChevronRight />
 </Link>
  </div>
  </section> 
      
    </>
  )
}
