import React from 'react'

const Rightside = () => {
  return (
    <div className='flex w-full md:w-[40%] mt-6 md:mt-11 flex-col items-center justify-center'>
      
      <div className='flex justify-center md:justify-end border-2 border-blue-500 shadow-[0_0_20px_white] rounded-3xl w-[70%] sm:w-[50%] md:w-[80%] lg:w-[60%] overflow-hidden mt-6 md:mt-8'>
        
        <img 
          className='w-full h-auto object-cover'  
          src='bp.jpeg' 
          alt="profile"
        />
     
      </div>

    </div>
  )
}

export default Rightside
