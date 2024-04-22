import React from 'react';
import FirstBankLogo from '../assets/images/FirstBankLogo.jpg';
import { BiExit } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
    const navigate = useNavigate();

  return (
    <>
    <article className='flex h-screen flex-col md:flex-row text-[#003B65] text-xs'>
        <div className='md:w-1/2 md:bg-[#033b63] hidden md:block md:relative'>
            <img src={FirstBankLogo} className='w-36 absolute top-56 right-64 border-none' />
        </div>
        <div className='flex flex-col h-screen justify-center items-center md:w-1/2'>
            <h1 className='text-2xl'>Register</h1>
            <p className='py-1'>Welcome! Please fill in your credentials.</p>

            <form className='py-4'>
                <label>Full Name
                    <br></br>
                    <input className='border border-gray-200 bg-gray-100 pl-5 pr-16 md:pl-5 md:pr-56 py-2 mt-1 mb-2 md:py-3 rounded-md font-extralight focus:outline-none focus:bg-white' placeholder='Enter your login ID' />
                </label>
                <br></br>
                <label>Password
                    <br></br>
                    <input className='border border-gray-200 bg-gray-100 pl-5 pr-16 md:pl-5 md:pr-56 py-2 mt-1 mb-2 md:py-3 rounded-md font-extralight focus:outline-none focus:bg-white' placeholder='Password' />
                </label>
                <br></br>
                <label>Confirm Password
                    <br></br>
                    <input className='border border-gray-200 bg-gray-100 pl-5 pr-16 md:pl-5 md:pr-56 py-2 mt-1 mb-2 md:py-3 rounded-md font-extralight focus:outline-none focus:bg-white' placeholder='Confirm Password' />
                </label>
            </form>
            <button className='bg-[#d7bd14] px-20 py-2 md:px-32 md:py-3 rounded-2xl hover:bg-white hover:border hover:border-[#d7bd14] relative'>Sign Up</button>
            <span className='absolute p-2 bg-gray-100 rounded-md bottom-12 right-20'>{<BiExit onClick={() => navigate('/')}/>}</span>
        </div>
    </article>
    </>
  )
}

export default SignUpPage