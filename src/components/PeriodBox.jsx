import React from 'react'

const PeriodBox = ({children}) => {
  return (
    <div className='border hidden lg:inline-block border-[#CACACA] px-3 py-1 rounded-md bg-white'  style={{fontSize:'0.71em'}}>
      {children}
    </div>
  )
}

export default PeriodBox
