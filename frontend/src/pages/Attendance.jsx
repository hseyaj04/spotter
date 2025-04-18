import React from 'react'
import Logo from '../components/Logo'
import Scan from '../../../assets/scan.png'
import Teacher from '../../../assets/teacher.png'
import Department from '../../../assets/corporation.png'
import Semester from '../../../assets/semester.png'
import Checked from '../../../assets/checked.png'
import {Link} from 'react-router-dom'
function Attendance() {
  return (
    <div className='p-3'>
        <Logo/>
        <div className='bg-[#5F4FA6] rounded-t-3xl p-5'>
            <div className='flex flex-row items-center justify-center'>
                <h2 className='text-white text-4xl font-semibold '>Computer Networks</h2>
                <Link to={'/camera'} className='w-20'>
                    <img src={Scan} alt="Scan" className='w-16' />
                </Link>            </div>
            <h2 className='text-lg my-1 font-semibold text-gray-300'>CSPC1010</h2>

            <div className='bg-[#8f7ae6] py-3 px-6 rounded-3xl'>
                <div className='flex flex-row items-center justify-right '>
                    <img className='h-15' src={Teacher} alt="" />
                    <h2 className='text-2xl mx-3 font-semibold text-black'>Prof. John Doe</h2>
                </div>
                <div className='flex flex-row items-center justify-between pb-2'>
                    <div className='flex flex-row items-center justify-center'>
                        <img className='h-10 p-2' src={Department} alt="" />
                        <h3>CSE</h3>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <img className='h-10 p-2' src={Semester} alt="" />
                        <h3>6th Sem</h3>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <img className='h-10 p-2' src={Checked} alt="" />
                        <h3>65</h3>
                    </div>
                </div>
            </div>        
        </div>
        <div className='bg-black p-4 rounded-b-3xl'>
            <h2 className='text-white text-3xl font-semibold'>BE22F05F053</h2>
            <h3 className='text-white text-lg'>JAYESH RAUT</h3>
        </div>
    </div>
  )
}

export default Attendance