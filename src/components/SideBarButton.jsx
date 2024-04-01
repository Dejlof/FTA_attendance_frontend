import React from 'react'

const SideBarButton = ({word, icon}) => {
  return (
    <li>
         <a href="/Overview" className="flex items-center pb-4 position-relative text-[8A8A8A]">
          <div className='p-2 bg-gray-100 rounded-md'>{icon}</div>
                <span className="ml-2">{word}</span>
            </a>
    </li>
   
  )
}

export default SideBarButton
