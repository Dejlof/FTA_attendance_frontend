import React from 'react';
import FirstBankLogo from '../assets/images/FirstBankLogo.jpg';
import { BiExit } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    // const [isCheckBox, setCheckBox] = React.useState(false);
    // const checkBox = isCheckBox ? tickChecked : tickBox ;

    // const tickCheckBox = () => {
    //     setCheckBox(!isCheckBox);
    // };

    const tickBox = (
        <svg width='10' height='10'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
        </svg>
    );
    const tickChecked = (
        <svg width='10' height='10'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        </svg>
    );

  return (
    <>
    <article className='flex h-screen flex-col md:flex-row text-[#003B65] text-xs'>
        <div className='md:w-1/2 md:bg-[#033b63] hidden md:block md:relative'>
            <img src={FirstBankLogo} className='w-36 absolute top-56 right-64 border-none' />
        </div>
        <div className='flex flex-col h-screen justify-center items-center md:w-1/2'>
            <h1 className='text-2xl'>Login</h1>
            <p className='py-1'>Welcome back!</p>

            <form className='py-4 gap-2'>
                <label>Login ID
                    <br></br>
                    <input className='border border-gray-200 bg-gray-100 pl-5 pr-16 md:pl-5 md:pr-56 py-2 mt-1 mb-2 md:py-3 rounded-md font-extralight focus:outline-none focus:bg-white' placeholder='Enter your login ID' />
                </label>
                <br></br>
                <label>Password
                    <br></br>
                    <input className='border border-gray-200 bg-gray-100 pl-5 pr-16 md:pl-5 md:pr-56 py-2 mt-1 mb-2 md:py-3 rounded-md font-extralight focus:outline-none focus:bg-white' placeholder='Password' />
                </label>
                <br></br>
                <section className='flex flex-col md:flex-row md:px-1 md:justify-between'>
                    {/* <span className='flex' onClick={tickCheckBox}>{checkBox}Remember me</span> */}
                    <p className='text-underline'>Forgot password?</p>
                </section>
            </form>
            <button className='bg-[#d7bd14] px-20 py-2 md:px-32 md:py-3 rounded-2xl hover:bg-white hover:border hover:border-[#d7bd14] relative'>Log In</button>
            <span className='absolute p-2 bg-gray-100 rounded-md bottom-12 right-20'>{<BiExit onClick={() => navigate('/')}/>}</span>
        </div>
    </article>
    </>
  )
}

export default LoginPage