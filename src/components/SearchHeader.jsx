import React from 'react'
import 'font-awesome/css/font-awesome.min.css'; 
import HeaderIcon from './HeaderIcon';
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import user from '../assets/images/user.png'
const SearchHeader = () => {
  const currentDate = new Date();

  const options = {
    weekday: 'short',
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  };
  
 const formattedDate = currentDate.toLocaleString('en-US', options);
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';

const formattedHours = hours % 12 || 12;

const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

  
 



  return (
    <div className='flex flex-row'>
      <div className='basis-2/3'>
      <input type="text" name="accountNumber" id="accountNumber" class="block w-40 md:w-full rounded-full border-0 py-2 px-4 text-sm text-gray-400  placeholder:text-gray-400  sm:text-sm sm:leading-6"
           placeholder="&#xF002; Search here ..." style={{fontFamily: "Poppins, FontAwesome"}}/>
      </div>
      <div className='flex basis-1/3 justify-end'>
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
          <h4>{formattedTime}</h4>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchHeader
