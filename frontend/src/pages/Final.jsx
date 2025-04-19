import React from 'react'
import Logo from '../components/Logo'
import Check from '../../../assets/check.png';

function Final() {
    const dateString = new Date();
    const time = dateString.toLocaleTimeString()
    const date = dateString.toLocaleDateString()
  return (
    <div className='p-5'>


        <div className='flex flex-row justify-left'>
            <Logo />
        </div>
        <div className='bg-[#5F4FA6] rounded-3xl p-5 flex flex-col items-center'>
            <div className='flex flex-col items-center p-5 w-full bg-[#75C667] rounded-3xl'>
                <img className='w-30 m-2' src={Check} alt="" />
                <h2 className='text-xl font-semibold'>Attendance Marked</h2>
                <div className='flex flex-row items-center'>
                    <p className='font-medium mx-2 text-m text-gray-800'>{date}</p>
                    <p className='font-medium mx-2 text-m text-gray-800'>{time}</p>
                </div>
            </div>
            <button className='text-white text-2xl w-full bg-[#B8A7FF] mt-8 rounded-full py-3'>Dashboard</button>
        </div>
    </div>
  )
}

export default Final