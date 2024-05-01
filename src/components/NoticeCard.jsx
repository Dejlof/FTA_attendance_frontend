import React from "react";
import CardsIcon from "./CardsIcon";
import noticeIcon from "../assets/images/Notice-icon.jpg";
import noticeImg from "../assets/images/Notice-img.jpg";
import noticeIcon3 from "../assets/images/Notice-icon3.png";
import noticeIcon2 from "../assets/images/Notice icon 2.png";

const NoticeCard = () => {
   return (
      <div className="p-6   bg-white rounded ">
         <div className="flex items-center  justify-between">
            <h1>Notice Board</h1>
            <CardsIcon>
               <img src={noticeIcon} alt="" />
            </CardsIcon>
         </div>

         <div className="flex items-center my-3  text-gray-400 text-sm">
            <h1 className="mx-1">Most Recent</h1>
            <CardsIcon>
               <img src={noticeIcon2} alt="" />
            </CardsIcon>
         </div>

         <div className="bg-slate-100 rounded flex items-center justify-between my-3">
            <div className="flex gap-2 text-[12px] text-gray-400 text-left text-balance">
               <CardsIcon>
                  <img src={noticeImg} alt="" />
               </CardsIcon>

               <h1 className="px-2">
                  Everyone should<br></br> wait after lecture...
               </h1>
            </div>

            <div className="flex justify-between gap-4 mx-5 ">
               <p className="text-[10px]  bg-[#F0BD2D] rounded">10, Mar</p>

               <CardsIcon>
                  <img src={noticeIcon3} alt="" />
               </CardsIcon>
            </div>
         </div>

         <div className="bg-slate-100 rounded flex items-center justify-between my-3">
            <div className="flex gap-2 text-[12px] text-gray-400 text-left text-balance">
               <CardsIcon>
                  <img src={noticeImg} alt="" />
               </CardsIcon>

               <h1 className="px-2">
                  Everyone should<br></br> wait after lecture...
               </h1>
            </div>

            <div className="flex justify-between gap-4 mx-5 ">
               <p className="text-[10px]  bg-[#F0BD2D] rounded">10, Mar</p>

               <CardsIcon>
                  <img src={noticeIcon3} alt="" />
               </CardsIcon>
            </div>
         </div>

         <div className="bg-slate-100 rounded flex items-center justify-between ">
            <div className="flex gap-2 text-[12px] text-gray-400 text-left text-balance">
               <CardsIcon>
                  <img src={noticeImg} alt="" />
               </CardsIcon>

               <h1 className="px-2">
                  Everyone should<br></br> wait after lecture...
               </h1>
            </div>

            <div className="flex justify-between gap-4 mx-5 ">
               <p className="text-[10px]  bg-[#F0BD2D] rounded">10, Mar</p>

               <CardsIcon>
                  <img src={noticeIcon3} alt="" />
               </CardsIcon>
            </div>
         </div>
      </div>
   );
};

export default NoticeCard;
