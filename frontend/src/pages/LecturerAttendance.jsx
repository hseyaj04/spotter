import React, {useState} from 'react'
import Logo from '../components/Logo'
import Axios from 'axios'
function LecturerAttendance() {
    const [isQrSelected, setIsQrSelected] = useState(true)
    const [isPresentSelected, setIsPresentSelected] = useState(false)
    const [attendees, setAttendees] = useState([])
    const qrImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATcSURBVO3BQY4kRxIEQdNA/f/Lun10XgJIpFfPkGsi+CNVS06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWik6pFn7wE5DepuQFyo2YC8oaaCcikZgIyqbkB8pvUvHFSteikatFJ1aJPlqnZBOQNNROQTUAmNROQSc0EZFJzo2YTkE0nVYtOqhadVC365MuAPKHmCSA3QCY1N0AmNROQSc0bat4A8oSabzqpWnRSteikatEn/zFqngAyqZmAPAHkBsiNmn+zk6pFJ1WLTqoWffIfA2RSMwF5Qs0EZAIyqbkBMqn5LzmpWnRSteikatEnX6bmb6JmAvKEmjfUbFLzNzmpWnRSteikatEny4D8SWomIJOaJ4BMaiYgk5oJyKRmAjKpuQHyNzupWnRSteikatEnL6n5mwB5Qs1vAjKpuVHzb3JSteikatFJ1aJPXgIyqZmAbFIzqbkB8oaaJ4DcqHkCyCY133RSteikatFJ1aJPvkzNBORGzQ2QTUDeUPMEkBs1N2omIDdqboBMat44qVp0UrXopGoR/sgLQJ5Q8wSQSc0NkBs1N0C+Sc0EZFLzTUAmNZtOqhadVC06qVr0yUtqboC8oeYGyKTmBsik5kbNBGRScwPkRs0bQCY1N2q+6aRq0UnVopOqRfgji4A8oWYCcqPmBsikZgJyo2YCcqNmAvKGmhsgk5oJyBNqNp1ULTqpWnRStQh/5AUgN2omIDdqboBMam6A3Kh5AsiNmhsgk5oJyI2aCcik5gkgk5o3TqoWnVQtOqla9MlLam6ATGomIDdAJjUTkBs1N0AmNTdqboDcqHlCzRNAJjUTkEnNppOqRSdVi06qFn3yEpBJzaRmAvKEmgnIE0AmNZOaGyCTmgnIpGYTkEnNJiCTmjdOqhadVC06qVqEP/ICkDfU3ACZ1ExAbtRMQG7UvAFkUnMD5EbNBGRScwPkRs2mk6pFJ1WLTqoW4Y+8AGRS8wSQSc0NkBs1N0A2qbkBcqPmBsikZgIyqbkBcqPmjZOqRSdVi06qFn3yh6m5AXKjZgIyqblRMwF5AsiNmjfUvAFkUvNNJ1WLTqoWnVQt+uTLgNyomYBMaiYgTwCZ1DyhZgIyqbkBMqmZgGwCMqn5TSdVi06qFp1ULfrky9RMQJ4AcgPkRs0NkEnNBGRSMwH5m6iZgExqvumkatFJ1aKTqkX4I/9iQDap+U1AJjVPAJnUPAFkUvPGSdWik6pFJ1WLPnkJyG9SM6m5ATKpeQPIpOYGyBtAJjVPALlRs+mkatFJ1aKTqkWfLFOzCcgNkEnNpOYGyKRmAvKGmgnIE2reUDMB+aaTqkUnVYtOqhZ98mVAnlCzCcgbaiYgE5An1ExAJiBvAPmTTqoWnVQtOqla9Mn/GTVPAJnUvAFkUvNNQG6ATGreOKladFK16KRq0Sf1D0BugLyh5gbIJjUTkEnNppOqRSdVi06qFn3yZWq+Sc0E5Akgk5oJyBNqngAyqbkBcqPmTzqpWnRSteikatEny4D8JiCTmgnIjZoJyKRmAjKpmYBMaiYgk5oJyKTmCSA3ar7ppGrRSdWik6pF+CNVS06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWik6pF/wMkb0A4h5W8NwAAAABJRU5ErkJggg=="
    const handlePresentClick = async () => {
        const sessionId = "6804b6ea63c4e1c9a0607da5"
        const response = (await Axios.get(`http://localhost:5000/api/v1/sessions/get-session/${sessionId}`)).data.attendees;
        setAttendees(response)
        // console.log(response);
        
        setIsPresentSelected(true)
        setIsQrSelected(false)
    }
    return (
    <div className='p-5'>
        <div className='flex flex-col items-start'>
            <Logo />
        </div>
        <div className='bg-[#4E4280] w-full flex flex-col items-center justify-center rounded-xl p-5 mt-5'>
            <div className='p-4 flex flex-row justify-around items-center w-full'>
                <button 
                onClick={() => {
                    setIsQrSelected(true)
                    setIsPresentSelected(false)
                }}
                className={`${isQrSelected ? 'bg-black': 'bg-[#B8A7FF]'} py-3 text-2xl rounded-full text-white font-semibold w-full mx-2`}
                >QR Code</button>
                <button
                onClick={handlePresentClick} 
                className={`${isPresentSelected ? 'bg-black': 'bg-[#B8A7FF]'} py-3 text-2xl rounded-full text-white font-semibold w-full mx-2`}
                >Present</button>
            </div>
            {isQrSelected && (
                <div className='w-full p-5 bg-black rounded-2xl'>
                <img className='w-full rounded-xl' src={qrImage} alt="" />
            </div>
            )}
            {isPresentSelected && (
                <div className='w-full'>
                    {attendees.map((attendee, index) => (
                        <div key={index} className='bg-black my-2 py-3 px-6 rounded-2xl'>
                            <h2 className='text-white text-2xl font-semibold'>{attendee.enrollmentNo}</h2>
                            <h3 className='text-gray-400 text-m font-semibold'>{attendee.fullname.firstname} {attendee.fullname.lastname}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default LecturerAttendance