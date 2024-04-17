import React from 'react'
import SearchHeader from './SearchHeader'
import AttendancePeriod from './AttendancePeriod'
import ListData from './ListData'


const AttendanceList = () => {
  return (
    <div className='lg:basis-4/5 basis-11/12 mr-8 py-10'>
        <SearchHeader/>
        <AttendancePeriod/>
        <ListData/>
    </div>
  )
}

export default AttendanceList
