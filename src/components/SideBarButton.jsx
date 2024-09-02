import React from "react";

<<<<<<<<< Temporary merge branch 1
const SideBarButton = ({ word, icon }) => {
   return (
      <li>
         <div className="flex items-center pb-4 position-relative text-[8A8A8A]">
            <div className="p-2 bg-gray-100 rounded-md">{icon}</div>
            <span className="ml-2">{word}</span>
         </div>
      </li>
   );
};
=========
const SideBarButton = ({word, icon}) => {
  return (
    <li>
         <a href="/Overview" className="flex items-center pb-4 position-relative text-[8A8A8A]">
          <div className='p-2 bg-gray-100 rounded-md text-base md:text-sm'>{icon}</div>
                <span className="ml-2 hidden md:inline-block">{word}</span>
            </a>
    </li>
   
  )
}
>>>>>>>>> Temporary merge branch 2

export default SideBarButton
