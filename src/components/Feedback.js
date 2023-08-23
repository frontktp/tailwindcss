import React from 'react'

const Feedback = () => {
  const image = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc'
  return (
    <section name="Feedback" className='w-full my-24 text-white bg-slate-700'>
      <div className='max-w-6xl px-5 py-12 mx-auto text-center'>
        <h2 className='text-4xl font-bold capitalize'>
          testmonials
        </h2>
        <p className='py-8 text-2xl text-white'>
          Irure minim veniam laboris cupidatat sint aute commodo exercitation irure enim magna laboris eu eiusmod. Enim ipsum sit mollit laboris elit deserunt aute nisi sit exercitation adipisicing. Adipisicing cupidatat aute exercitation veniam cillum fugiat velit mollit qui nisi voluptate culpa nulla anim.
        </p>

        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3'>
            <img src={image} alt="person1" className='w-16 rounded-full -mt-14'/>
            <h5 className='text-lg font-bold'>Ali ko1</h5>
            <p className='text-sm '>Voluptate aliqua veniam consequat sit aliqua ipsum cupidatat ut tempor anim aliqua ex.</p>
          </div>
          <div className='flex-col items-center hidden p-6 space-y-6 rounded-lg md:flex bg-gray-100/30 md:w-1/3'>
            <img src={image} alt="person1" className='w-16 rounded-full -mt-14'/>
            <h5 className='text-lg font-bold'>Ali ko2</h5>
            <p className='text-sm '>Voluptate aliqua veniam consequat sit aliqua ipsum cupidatat ut tempor anim aliqua ex.</p>
          </div>
          <div className='flex-col items-center hidden p-6 space-y-6 rounded-lg md:flex bg-gray-100/30 md:w-1/3'>
            <img src={image} alt="person1" className='w-16 rounded-full -mt-14'/>
            <h5 className='text-lg font-bold'>Ali ko3</h5>
            <p className='text-sm '>Voluptate aliqua veniam consequat sit aliqua ipsum cupidatat ut tempor anim aliqua ex.</p>
          </div>

        </div>


        <button className='px-6 py-3 my-8 capitalize duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110'>
          get started
        </button>

      </div>

















    </section>
  )
}

export default Feedback