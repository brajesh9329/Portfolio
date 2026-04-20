import React from 'react'

const Rightside3 = () => {
  return (
    <div className='w-full md:w-[40%] mt-8 md:mt-0 flex justify-center'>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-[90%] md:w-full'>

        {/* Card */}
        <div className='border-2 border-blue-500 rounded-2xl p-4 text-center hover:shadow-[0_0_15px_#3b82f6] transition'>
          <img 
            className='mx-auto w-12 mb-3' 
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWU5Y2QyIiBzdHJva2Utd2lkdGg9IjEuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMyIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB4PSIxNCIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB4PSIxNCIgeT0iMTQiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMyIgeT0iMTQiIHJ4PSIxIi8+PC9zdmc+' 
            alt="icon"
          />
          <h2 className='text-lg font-semibold'>Website Design</h2>
          <p className='text-sm text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        {/* Card */}
        <div className='border-2 border-blue-500 rounded-2xl p-4 text-center hover:shadow-[0_0_15px_#3b82f6] transition'>
          <img className='mx-auto w-12 mb-3' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWU5Y2QyIiBzdHJva2Utd2lkdGg9IjEuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMyIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB4PSIxNCIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB4PSIxNCIgeT0iMTQiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMyIgeT0iMTQiIHJ4PSIxIi8+PC9zdmc+' alt="icon"/>
          <h2 className='text-lg font-semibold'>Web Development</h2>
          <p className='text-sm text-gray-300'>
            Modern and scalable web apps using latest tech.
          </p>
        </div>

       
       

      </div>

    </div>
  )
}

export default Rightside3