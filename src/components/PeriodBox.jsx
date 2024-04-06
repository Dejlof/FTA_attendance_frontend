import React from 'react'

const PeriodBox = ({children}) => {
  return (
    <div className='border border-[#CACACA] px-2 py-1 rounded-md bg-white'  style={{fontSize:'0.71em'}}>
      {children}
    </div>
  )
}

export default PeriodBox
