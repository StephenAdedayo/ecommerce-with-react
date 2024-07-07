import React from 'react'
import banner from "/image-product.png"
import { FaShoppingBag } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 px-4'>
      <div className='py-8 flex flex-col-reverse md:flex-row justify-between items-center gap-14'>
    
    <div className='md:w-1/2 text-center md:text-left'>

   <h1 className='text-5xl font-light mb-5'>Collections</h1>
   <p className='text-xl mb-7'>you can explore ans shop many differnt collection
   from various barands here.</p>


   <button className='bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm mx-auto md:mx-0 flex items-center gap-2'><FaShoppingBag className='' />Shop Now </button>

    </div>



        <div className=''>
            <img src={banner} alt="" />
        </div>
     

      </div>
    </div>
  )
}

export default Banner
