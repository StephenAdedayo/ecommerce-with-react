import React from 'react'
import { Link } from 'react-router-dom'


const Newsletter = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
      <h2 className='title mb-8'>Follow products and discounts on Instagram</h2>



      <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
        <Link to ='/'>
        
        <img src="/05.png" alt="" />
        </Link>

        <Link to ='/'>
        
        <img src="/06.png" alt="" />
        </Link>

        <Link to ='/'>
        
        <img src="/07.png" alt="" />
        </Link>

        <Link to ='/'>
        
        <img src="/08.png" alt="" />
        </Link>
        <Link to ='/'>
        
        <img src="/09.png" alt="" />
        </Link>

        <Link to ='/'>
        
        <img src="/10.png" alt="" />
        </Link>
      </div>


      <div>
        <h2 className='title mb-8 capitalize'>or subscribe to the newsletter</h2>


        <form action="" className='md:w-1/2 mx-auto text-center '>
            <input type="email" name='email' id='email' placeholder='email address' className='h-5 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50  mr-4'/>
            <input type="submit" value={"submit"} className='bg-black text-white px-6 py-1 rounded-sm' />
        </form>
      </div>
    </div>
  )
}

export default Newsletter
