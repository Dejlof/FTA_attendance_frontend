import React from 'react'
import 'font-awesome/css/font-awesome.min.css'; 
import HeaderIcon from './HeaderIcon';
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import user from '../assets/images/user.png'
const SearchHeader = () => {
  return (
    <div className='flex flex-row'>
      <div className='mr-10 basis-2/3'>
      <input type="text" name="accountNumber" id="accountNumber" class="block w-40 md:w-full rounded-full border-0 py-2 pl-2 text-sm text-gray-400  placeholder:text-gray-400  sm:text-sm sm:leading-6"
           placeholder="&#xF002; Search here ..." style={{fontFamily: "Roboto, FontAwesome"}}/>
      </div>
      <div className='flex basis-1/3'>
      <HeaderIcon p='p-2.5'>
        <AiOutlineMessage/>
      </HeaderIcon>
      <HeaderIcon p='p-2.5'>
        <IoIosNotificationsOutline/>
      </HeaderIcon>
      <HeaderIcon>
        <img src={user} alt=""  className='w-full'/>
      </HeaderIcon>
        <div className='text-sm text-right' style={{fontSize:'0.7em'}}>
          <h4>10:00 AM</h4>
          <p>Thur 20 Mar 2024</p>
        </div>
      </div>
    </div>
  )
}

export default SearchHeader
