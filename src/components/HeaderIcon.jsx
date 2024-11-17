import React from 'react'


const HeaderIcon = ({children, p='p-0 inline-block '}) => {
  return (
    <div className={`${p} rounded-full h-10 w-10 border mr-6 border-[#E9E9E9] text-[#8A8A8A]`}>
      {children}
    </div>
  )
}

export default HeaderIcon
 