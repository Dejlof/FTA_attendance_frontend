import React from 'react'
import PeriodBox from './PeriodBox'
import { FaArrowRight } from 'react-icons/fa6'

const AttendancePeriod = () => {
  return (
    <div className='flex flex-row my-10'>
        <div className='flex basis-1/3'>
            <h3 className='text-sm mr-3 font-bold'>Attendance List</h3>
            <PeriodBox>
                Jan 20, 2024
            </PeriodBox>
            <FaArrowRight className=' text-[#b8b8b8] mt-1 mx-3' />
            <PeriodBox>
                Jan 20, 2024
            </PeriodBox>
        </div>
        <div className='flex basis-2/3 justify-end mr-12'>
            <PeriodBox>
                Jan 20, 2024
            </PeriodBox>
            <PeriodBox>
                Jan 20, 2024
            </PeriodBox>
        </div>
      
    </div>
  )
}

export default AttendancePeriod
