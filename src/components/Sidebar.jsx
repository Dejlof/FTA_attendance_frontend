import React from 'react'
import SideBarButton from './SideBarButton'
import { FaHouse } from "react-icons/fa6";
import FBNLogo from '../assets/images/FBNLogo.jpg'
import Calender from '../assets/images/Calender.png'
import { ImManWoman } from "react-icons/im";
import { MdOutlineQueryBuilder } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiExit } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=' text-[#8A8A8A] basis-1/12 lg:basis-1/5 mr-5 lg:mr-0 text-s lg:text-sm'>
      <div className='lg:w-52 w-24 bg-white min-h-full text-center flex flex-col items-center py-10'>
      <img className='lg:w-10 lg:h-12 w-5 h-6 mb-10' src={FBNLogo} alt="First Bank" />
      <ul>
        <NavLink to=''>
          <SideBarButton word={'Overview'} icon={<FaHouse/>}/> 
        </NavLink>
        <NavLink to='delegates'>
           <SideBarButton word={'Delegates'} icon={<ImManWoman/>}/> 
        </NavLink>
        <NavLink to='queries'>
          <SideBarButton word={'Queries'} icon={<MdOutlineQueryBuilder/>}/>
        </NavLink>
        <NavLink to='notifications'>
           <SideBarButton word={'Notifications'} icon={<IoIosNotificationsOutline/>}/>
        </NavLink>
        <NavLink to='message'>
          <SideBarButton word={'Message'} icon={<AiOutlineMessage/>}/>
        </NavLink>
        <NavLink to='settings'>
          <SideBarButton word={'Settings'} icon={< FiSettings/>}/>
        </NavLink>
      </ul>
      <img className='mt-10 w-10 lg:w-20' src={Calender} alt="First Bank" />
      <p  className='text-[#181818] pt-2 pb-3 text-s lg:text-sm'>Create <br/> Notice</p>
      <button className='bg-[#003B65] text-white px-2 lg:px-5 py-1 mb-10 text-s lg:text-sm'>Create</button>
      <SideBarButton word={'Exit'} icon={<BiExit/>}/>
      </div>
    </div>
  )
}

export default Sidebar
