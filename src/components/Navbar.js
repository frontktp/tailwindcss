import React, { useState } from 'react'
import { FaAlignJustify, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => { 
  const [nav, setnav] = useState(false)
  return (
    <nav className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className="flex items-center justify-between w-full h-full px-10">
        <div className="flex items-center">
          <h1 className='mr-4 text-3xl font-bold sm:text-4xl'>Chatty</h1>
          <ul className='hidden md:flex'>
            <li><Link to="Home" smooth='true' duration={500}>Home</Link></li>
            <li><Link to="About" smooth='true' duration={500}>About</Link></li>
            <li><Link to="Support" smooth='true' duration={500}>Support</Link></li>
            <li><Link to="Feature" smooth='true' duration={500}>Feature</Link></li>
            <li><Link to="testmonials" smooth='true' duration={500}>Feedback</Link></li>
          </ul>
        </div>
        <div className='hidden pr-4 md:flex'>
          <button className='mr-4 bg-transparent border-none text-slate-600'>
            Sign in
          </button>
          <button className='px-8 py-3'>
            Sign Up
          </button>
        </div>
        <div className='mr-4 cursor-pointer md:hidden' onClick={()=> setnav(!nav)}>
          { nav ? <FaTimes/> : <FaAlignJustify/> }
        </div>
      </div>
      <ul className={nav ? 'absolute bg-zinc-200 w-full px-8' : 'hidden'}>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={()=>setnav(false)} to='Home' smooth='true' duration={500}>Home</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={()=>setnav(false)} to='About' smooth='true' duration={500}>About</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={()=>setnav(false)} to='Support' smooth='true' duration={500}>Support</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={()=>setnav(false)} to='Feature' smooth='true' duration={500}>Feature</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={()=>setnav(false)} to='Feedback' smooth='true' duration={500}>Feedback</Link></li>
        <div className='flex flex-col my-4'>
          <button className='px-8 py-3 mb-4 bg-transparent text-slate-600'>Sign In</button>
          <button className='px-8 py-3 mb-4 b'>Sign Up</button>
        </div>
      </ul>

    </nav>
  )
}

export default Navbar