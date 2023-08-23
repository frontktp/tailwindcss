import React from 'react'
import apple from '../assets/apple.svg'
import googles from '../assets/google.svg'
const Home = () => {
  return (
    <section name="Home" className='flex w-full h-screen bg-zinc-200'>Home
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
      <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start'>
        <p className='text-2xl'>Use our chat platform.</p>
        <h1 className='py-3 text-5xl font-bold dm:text-7xl'>Chat Management</h1>
        <p className='text-2xl'>Chatty is the best chat platform.</p>
        <button className='px-6 py-3 sm:w-[60%] my-4'>Get Started</button>
      </div>
      <div className='flex flex-col justify-center px-2'>
        <h2 className='font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'>Easily download app <br className='hidden sm:block'/>Google & Apple</h2>
        <p className='text-[13px] leading-[30.8px] max-w-[470px] mt-5 '>체력 4700 방어력 329, 마저 201인 챔피언이 저지불가, 쉴드, 벽 넘기는 거 있고요 에어본 있고 심지어 쿨타임은 1초밖에 안 되고 마나는 15 들고 (따봉) W는 심지어 변신하면 쿨 초기화에다가 패시브는 고정피해가 들어가며 방마저를 올리면 올릴수록 스킬 가속이 생기고 Q에 스킬 가속이 생기고 스킬 속도도 빨라지고 그 다음에 공격력 계수가 있어가지고 W가</p>

      <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
        {/* <img src="../assets/apple.svg" alt="apple_store" className=''/>
        <img src="../assets/google.svg" alt="google_play" className=''/> */}
        <img src={apple} alt="apple_store" className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer'/>
        <img src={googles} alt="google_play" className='w-[144.17px] h-[43.08px] object-contain cursor-pointer'/>
      </div>
      </div>
    </div>

    </section>
  )
}

export default Home