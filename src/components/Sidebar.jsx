import React, { useState } from "react";
import SideBarButton from "./SideBarButton";
import { FaHouse } from "react-icons/fa6";
import FBNLogo from "../assets/images/FBNLogo.jpg";
import Calender from "../assets/images/Calender.png";
import { ImManWoman } from "react-icons/im";
import { MdOutlineQueryBuilder } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiExit } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const Sidebar = () => {
   const [isSideNav, setIsSideNav] = useState(false);

   const openSideNav = () => setIsSideNav(true);
   const closeSideNav = () => setIsSideNav(false);

   const modalClose = (
      <svg width="16" height="32" style={{ cursor: "pointer" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
      </svg>
    );

   return (
      <div className=" text-[#8A8A8A]" style={{ fontSize: "0.8em" }}>
         <div
            className={` ${
               isSideNav ? "w-52" : "w-12"
            }  bg-white min-h-full text-center flex flex-col items-center py-10 ease-in transition-all duration-500`}
         >
            {isSideNav && (
               <div className="flex mb-10 items-center gap-16 justify-between">
                  <img className="w-10 h-12 " src={FBNLogo} title="FirstBank Logo" alt="First Bank" />
                  <div
                     className="cursor-pointer hover:scale-105 transition-all duration-300"
                     onClick={closeSideNav}
                     title="close sidebar"
                  >
                     {modalClose}
                  </div>
               </div>
            )}
            <ul>
               {!isSideNav && (
                  <CiMenuFries
                     className="inline-block mb-10 cursor-pointer"
                     size={26}
                     onClick={openSideNav}
                     title="open sidebar"
                  />
               )}
               <NavLink to="">
                  <SideBarButton
                     isSideNav={isSideNav}
                     word={"Overview"}
                     icon={<FaHouse />}
                  />
               </NavLink>
               <NavLink to="delegates">
                  <SideBarButton
                     isSideNav={isSideNav}
                     word={"Delegates"}
                     icon={<ImManWoman />}
                  />
               </NavLink>
               <NavLink to="queries">
                  <SideBarButton
                     isSideNav={isSideNav}
                     word={"Queries"}
                     icon={<MdOutlineQueryBuilder />}
                  />
               </NavLink>
               <NavLink to="notifications">
                  <SideBarButton
                     isSideNav={isSideNav}
                     word={"Notifications"}
                     icon={<IoIosNotificationsOutline />}
                  />
               </NavLink>
               <NavLink to="message">
                  <SideBarButton
                     isSideNav={isSideNav}
                     word={"Message"}
                     icon={<AiOutlineMessage />}
                  />
               </NavLink>
               <NavLink to="settings">
                  <SideBarButton
                     isSideNav={isSideNav}
                     word={"Settings"}
                     icon={<FiSettings />}
                  />
               </NavLink>
            </ul>
            {isSideNav && (
               <div className="calendar">
                  <img className="mt-10 w-20" src={Calender} alt="First Bank" />
                  <p
                     style={{ fontSize: "12px" }}
                     className="text-[#181818] pt-2 pb-3"
                  >
                     Create <br /> Notice
                  </p>
                  <button className="bg-[#003B65] text-white px-5 py-1 mb-10">
                     Create
                  </button>
               </div>
            )}

            <SideBarButton
               isSideNav={isSideNav}
               word={"Exit"}
               icon={<BiExit />}
            />
         </div>
      </div>
   );
};

export default Sidebar;
