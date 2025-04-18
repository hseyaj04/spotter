import React from 'react'
import {Link} from 'react-router-dom'
function OngoingAttendance() {
  return (
    <Link 
    to={'/attendance'}
    className='bg-[#8C7CD3] bg-opacity-50 rounded-3xl px-5 pb-2 m-2 flex flex-col justify-between'>
        <h2 className='text-white font-semibold text-3xl -mb-1 mt-5'>CN</h2>
        <h3 className='text-gray-700 font-semibold'>Computer Network</h3>
    </Link>
  )
}

export default OngoingAttendance