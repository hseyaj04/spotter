import React from 'react'
import {Link} from 'react-router-dom'
function OngoingAttendance(props) {
  // console.log(props.session);
  
  const getAbbreviation = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const courseName = props.session.courseDetails.courseName;
  const abbreviation = getAbbreviation(courseName);

  return (
    <Link 
      to={'/attendance'}
      className='bg-[#8C7CD3] bg-opacity-50 rounded-3xl px-5 pb-2 m-2 flex flex-col justify-between'>
        <h2 className='text-white font-semibold text-3xl -mb-1 mt-5'>{abbreviation}</h2>
        <h3 className='text-gray-700 font-semibold'>{courseName}</h3>
    </Link>
  );
}

export default OngoingAttendance