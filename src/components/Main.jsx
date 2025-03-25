import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router'

function Main() {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center w-3/4 gap-y-6'>
        <div className='text-4xl md:text-6xl font-bold'>
          Uniting Communities Through
          <div className='flex'> <Sparkles className='text-sky-400 size-14 mx-4' /><span className='text-transparent bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text'>Inspiring Events</span></div>
        </div>
        <div className='text-lg'>
          Join us to be part of a community where spirituality meets innovation. Together, we'll build a world that's more inclusive, engaging, and connected than ever before. Discover meaningful conversations and build strong relationships.
        </div>
        <button
          type='button'
          className='flex items-center justify-center rounded-md bg-gradient-to-r from-sky-400 to-sky-700 bg-[length:200%] py-2 px-4 text-lg text-white transition-all duration-500 hover:bg-right  shadow-md'
          onClick={()=> navigate("/events")}>
          Explore Events <ArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Main
