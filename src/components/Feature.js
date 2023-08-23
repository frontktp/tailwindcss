import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Feature = () => {
  return (
    <section name="Feature" className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>
          Features
        </h2>
        <p className='py-8 text-2xl text-center text-gray-600'>
          Tempor commodo sint ipsum sint velit id irure Lorem proident non culpa esse deserunt. In est sit aliqua laborum eiusmod nulla duis. Veniam labore cillum non nulla esse occaecat consequat proident.
        </p>
        
        <div className='grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='flex'>
            <FaCheck className='mt-1 mr-3 text-blue-500 w-7'/>
            <div>
              <h3 className='text-lg font-bold capitalize'>
                real-time1
              </h3>
              <p className='pt-2 pb-4 text-lg'>
                Nostrud dolore veniam et sit. Do amet commodo consequat ad laboris sint dolor. Aliqua mollit voluptate commodo aliquip et aliqua. Voluptate do minim ea amet amet tempor Lorem laboris. Incididunt in enim ipsum laboris excepteur sunt exercitation magna ullamco minim fugiat sint.
              </p>
            </div>

          </div>
          <div className='flex'>
            <FaCheck className='mt-1 mr-3 text-blue-500 w-7'/>
            <div>
              <h3 className='text-lg font-bold capitalize'>
                real-time2
              </h3>
              <p className='pt-2 pb-4 text-lg'>
                Nostrud dolore veniam et sit. Do amet commodo consequat ad laboris sint dolor. Aliqua mollit voluptate commodo aliquip et aliqua. Voluptate do minim ea amet amet tempor Lorem laboris. Incididunt in enim ipsum laboris excepteur sunt exercitation magna ullamco minim fugiat sint.
              </p>
            </div>

          </div>
          <div className='flex'>
            <FaCheck className='mt-1 mr-3 text-blue-500 w-7'/>
            <div>
              <h3 className='text-lg font-bold capitalize'>
                real-time3
              </h3>
              <p className='pt-2 pb-4 text-lg'>
                Nostrud dolore veniam et sit. Do amet commodo consequat ad laboris sint dolor. Aliqua mollit voluptate commodo aliquip et aliqua. Voluptate do minim ea amet amet tempor Lorem laboris. Incididunt in enim ipsum laboris excepteur sunt exercitation magna ullamco minim fugiat sint.
              </p>
            </div>

          </div>
          <div className='flex'>
            <FaCheck className='mt-1 mr-3 text-blue-500 w-7'/>
            <div>
              <h3 className='text-lg font-bold capitalize'>
                real-time4
              </h3>
              <p className='pt-2 pb-4 text-lg'>
                Nostrud dolore veniam et sit. Do amet commodo consequat ad laboris sint dolor. Aliqua mollit voluptate commodo aliquip et aliqua. Voluptate do minim ea amet amet tempor Lorem laboris. Incididunt in enim ipsum laboris excepteur sunt exercitation magna ullamco minim fugiat sint.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Feature