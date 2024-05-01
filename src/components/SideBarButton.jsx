import React from "react";

const SideBarButton = ({ word, icon, isSideNav }) => {
   return (
      <li>
         <div className="flex items-center pb-4 position-relative text-[8A8A8A]">
            <div className="p-2 bg-gray-100 rounded-md" title={word}>{icon}</div>
            {isSideNav && <span className="ml-2">{word}</span>}
         </div>
      </li>
   );
};

export default SideBarButton;
