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

const Sidebar = () => {
  return (
    <div className=' text-[#8A8A8A] basis-1/5'  style={{ fontSize: '11px' }}>
      <div className='w-52 bg-white min-h-full text-center flex flex-col items-center py-10'>
      <img className='w-10 h-12 mb-10' src={FBNLogo} alt="First Bank" />
      <ul>
        <SideBarButton word={'Overview'} icon={<FaHouse/>}/>
        <SideBarButton word={'Delegates'} icon={<ImManWoman/>}/>
        <SideBarButton word={'Queries'} icon={<MdOutlineQueryBuilder/>}/>
        <SideBarButton word={'Notifications'} icon={<IoIosNotificationsOutline/>}/>
        <SideBarButton word={'Message'} icon={<AiOutlineMessage/>}/>
        <SideBarButton word={'Settings'} icon={< FiSettings/>}/>
      </ul>
      <img className='mt-10 w-20' src={Calender} alt="First Bank" />
      <p  style={{ fontSize: '12px' }} className='text-[#181818] pt-2 pb-3'>Create <br/> Notice</p>
      <button className='bg-[#003B65] text-white px-5 py-1 mb-10'>Create</button>
      <SideBarButton word={'Exit'} icon={<BiExit/>}/>
      </div>
    </div>
  )
}

export default Sidebar
