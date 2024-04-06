import React from 'react'
import PeriodBox from './PeriodBox'
import { FaArrowRight } from 'react-icons/fa6'

const AttendancePeriod = () => {
  return (
    <div className='flex flex-row my-10'>
        <div className='flex basis-1/2'>
            <h3 className='text-lg mr-3 font-bold'>Attendance List</h3>
            <PeriodBox>
                Jan 20, 2024
            </PeriodBox>
            <FaArrowRight className=' text-[#b8b8b8] mt-1 mx-3' />
            <PeriodBox>
                Jan 20, 2024
            </PeriodBox>
        </div>
        <div className='flex basis-1/2 justify-end'>
        <input type="text" name="accountNumber" id="accountNumber" className="block border border-[#CACACA] rounded-md  px-1  text-black placeholder:text-black  sm:text-sm sm:leading-6 mr-5"
           placeholder="&#xF002; Search here .." style={{fontFamily: "Poppins, FontAwesome", fontSize:"0.71em"}}/>
            <PeriodBox>
            <select name="activity" id="activity">
        <option value="login">Log In</option>
         <option value="signin">Sign Up</option>
         </select>
            </PeriodBox>
        </div>
      
    </div>
  )
}

export default AttendancePeriod
