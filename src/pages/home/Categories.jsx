import React from 'react'
import { Link } from 'react-router-dom'


const Categories = () => {

    const companyLogo = [
        {id: 1, img: "/brand-2.png"},
        {id: 2, img: "/brand-3.png"},
        {id: 3, img: "/brand-4.png"},
        {id: 4, img: "/brand-5.png"},
        {id: 5, img: "/brand-5.png"},
    ]

  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
      
           <div className='flex justify-around flex-wrap items-center gap-4 py-5 '>
           {
            companyLogo.map((image) => (
                <div key={image.id}><img src={image.img} alt="" /></div>
            ))
           }
           </div>

     <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
        <p className='font-semibold uppercase text-center md:-rotate-90  bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles </p>

        <div>
            <Link to=""><img src="/18.png"alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
        </div>
         
         <div className='md:w-1/2 '>

            <div className='grid grid-cols-2 gap-2'>

            <Link to=""><img src="/01.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
            <Link to=""><img src="/02.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
            <Link to=""><img src="/03.png" alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
            <Link to=""><img src="/20.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>

            </div>

         </div>


     </div>

    </div>
  )
}

export default Categories
