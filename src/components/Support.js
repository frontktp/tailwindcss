import React from 'react'
import supportImg from '../assets/support.jpeg'
import {FaArrowRight} from 'react-icons/fa'
const Support = () => {
  return (
    <section name='Support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-slate-900/90 absolute'>
        <img src={supportImg} alt="Support Image" className='object-cover w-full h-full mix-blend-overlay' />

      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='pt-8 text-3xl text-center uppercase text-slate-300'>support</h2>
          <h3 className='py-6 text-5xl font-bold text-center'>We support you</h3>
          <p className='py-4 text-3xl text-slate-300'>
            Magna mollit dolor veniam adipisicing et exercitation. Exercitation reprehenderit aliqua aliqua aliqua. Velit reprehenderit sit velit irure amet occaecat in occaecat voluptate minim cillum.
          </p>
        </div>
        
        <div className='grid grid-cols-1 px-4 pt-12 text-black lg:grid-cols-3 gap-x-8 gap-y-16 sm:pt-20'>
          <div className='bg-white shadow-2xl rounded-xl'>
            <div className='p-8'>
              <h3 className='my-6 text-2xl font-bold capitalize'>support</h3>
              <p className='text-gray-600 texl-xl'>Ipsum est fugiat proident dolor pariatur mollit duis culpa nostrud velit.</p>
            </div>
            <div className='py-4 pl-8 bg-slate-100'>
              <p className='flex items-center text-blue-600 capitalize'>more info... <FaArrowRight className='w-5 ml-2'></FaArrowRight></p>
            </div>
          </div>
          <div className='bg-white shadow-2xl rounded-xl'>
            <div className='p-8'>
              <h3 className='my-6 text-2xl font-bold capitalize'>inquires</h3>
              <p className='text-gray-600 texl-xl'>Ipsum est fugiat proident dolor pariatur mollit duis culpa nostrud velit.</p>
            </div>
            <div className='py-4 pl-8 bg-slate-100'>
              <p className='flex items-center text-blue-600 capitalize'>more info... <FaArrowRight className='w-5 ml-2'></FaArrowRight></p>
            </div>
          </div>
          <div className='bg-white shadow-2xl rounded-xl'>
            <div className='p-8'>
              <h3 className='my-6 text-2xl font-bold capitalize'>sales</h3>
              <p className='text-gray-600 texl-xl'>Ipsum est fugiat proident dolor pariatur mollit duis culpa nostrud velit.</p>
            </div>
            <div className='py-4 pl-8 bg-slate-100'>
              <p className='flex items-center text-blue-600 capitalize'>more info... <FaArrowRight className='w-5 ml-2'></FaArrowRight></p>
            </div>
          </div>
        </div>
      </div>












    </section>
  )
}

export default Support 