import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const OverviewCard = ({ title, number }) => {
   return (
      <div className="rounded cursor-pointer bg-white p-10 shadow-sm flex flex-col transition-all duration-500 ease-in hover:bg-[#003B65] hover:text-white group">
         <h1 className="text-[16px] font-medium mb-4 bg-[#EAB82A0F] grid place-items-center leading-[18.83px]">
            {title}
         </h1>
         <div className="flex items-center justify-between">
            <div className="text-[#003B65] group-hover:text-white font-semibold text-[32px]">
               {number}
            </div>
            <div className="icon bg-[#F0BD2D] group-hover:bg-gradient-to-r from-white via-white to-[#D8D8D8] rounded-full w-10 h-10 flex items-center justify-center relative">
               <span className="text-white group-hover:text-[#003B65] text-2xl transform rotate-[330deg]">
                  <MdOutlineKeyboardDoubleArrowRight />
               </span>
            </div>
         </div>
      </div>
   );
};

export default OverviewCard;
