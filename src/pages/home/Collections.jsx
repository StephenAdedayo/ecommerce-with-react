import React from 'react'
// import collection from '/bg.png'
import zara from '/zara.png'


const Collections = () => {
  return (
    <div className={`bg-[url("/bg.png")] bg-cover bg-fixed bg-center bg-no-repeat xl:px-28 px-4 my-20`}>
      
      <div className='h-[580px] flex justify-between items-center md:flex-row'>
        
        <div className='md:w-1/2'></div>

        <div className='md:w-1/2'>
        
        <img src={zara} alt="" />
        <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>Lustrous yet understated. The new evening
wear collection exclusively offered at the
reopened Giorgio Armani boutique in Los
Angeles.</p>
<button className='px-6 py-3 bg-white text-black rounded-sm font-semibold'>See Collections</button>
        </div>


        
      </div>



    </div>
  )
}

export default Collections
