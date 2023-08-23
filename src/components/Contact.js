import React from 'react'

const Contact = () => {
  return (
    <section name="Contact" className='w-full h-screen p-4'>
      <div className='flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold capitalize'>
            contact
          </h2>
          <p className='py-6 text-3xl text-gray-500'>
            Proident irure veniam excepteur cillum cillum nisi nisi ipsum aute est incididunt et aute eu.
          </p>
        </div>

        <div className='flex items-center justify-center mt-10'>
          <form className='flex flex-col w-full md:w-1/2'>
            <input name="name" placeholder='enter your name' className='p-2 capitalize border-2 rounded-md focus:outline-none' />
            <input type="email" name='email' placeholder='enter your email' className='p-2 mt-4 capitalize border-2 rounded-md focus:outline-none'/>
            <textarea name="message" placeholder='enter your message' className='p-2 mt-4 capitalize border-2 rounded-md focus:outline-none' id="" cols="30" rows="10"></textarea>

            <button className='px-6 py-3 mx-auto my-8 capitalize duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110 '>
              let's talk
            </button>
          
          </form>
        </div>
      </div>








    </section>
  )
}

export default Contact