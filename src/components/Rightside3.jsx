import React from 'react'

const Rightside3 = () => {
  return (
    <div className='w-full md:w-[40%] mt-8 md:mt-0 flex justify-center'>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-[90%] md:w-full'>

        {/* Card */}
        <div className='border-2 border-blue-500 rounded-2xl p-4 text-white text-center hover:shadow-[0_0_15px_#3b82f6] transition'>
          <img 
            className='mx-auto w-12 mb-3' 
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMGM0ZDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sYXB0b3AtbWluaW1hbC1pY29uIGx1Y2lkZS1sYXB0b3AtbWluaW1hbCI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjEyIiB4PSIzIiB5PSI0IiByeD0iMiIgcnk9IjIiLz48bGluZSB4MT0iMiIgeDI9IjIyIiB5MT0iMjAiIHkyPSIyMCIvPjwvc3ZnPg==' 
            alt="icon"
          />
          <h2 className='text-lg font-semibold'>Website Design</h2>
          <p className='text-sm text-gray-300'>
            Crafting beautiful and functional websites that deliver seamless user experiences.
          </p>
        </div>

        {/* Card */}
        <div className='border-2 border-blue-500 rounded-2xl p-4 text-center hover:shadow-[0_0_15px_#3b82f6] transition'>
          <img className='mx-auto w-12 mb-3' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMGM0ZDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kb2NrLWljb24gbHVjaWRlLWRvY2siPjxwYXRoIGQ9Ik0yIDhoMjAiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIi8+PHBhdGggZD0iTTYgMTZoMTIiLz48L3N2Zz4=' alt="icon"/>
          <h2 className='text-lg text-white font-semibold'>Frontend Development</h2>
          <p className='text-sm text-gray-300'>
            Creating interactive and dynamic user interfaces using React, Tailwind CSS, and JavaScript.
          </p>
        </div>

       
       

      </div>

    </div>
  )
}

export default Rightside3