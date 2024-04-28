import React from 'react';
import FirstBankLogo from '../assets/images/FirstBankLogo.jpg';
import { BiExit } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { FgtPwd_URL } from '../BaseURLs/AllURLs';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const arrow = (
    <svg width='10' height='10'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
    </svg>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    console.log('Email: ', email);

    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidator.test(email)) {
      setErrorMessage('Please enter a valid email address!');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    try {
      const response = await fetch(`${FgtPwd_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      if (response.status === 200) {
        console.log('Request sent successfully: ', data);
        navigate('/passwordReset', { state: { email: email }})
      } else {
        setErrorMessage(data.message || 'Request failed.');
        setTimeout(() => {
          console.log('Clearing error message...');
          setErrorMessage('');
        }, 3000);
      }
    } catch (error) {
      console.log('Login failed: ', error.message);
      setErrorMessage('An error occurred while processing your request.');
      console.log('Clearing error message...');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <>
      <article className='flex h-screen flex-col lg:flex-row text-[#003B65] text-xs lg:text-sm'>
        <div className='md:w-1/2 lg:bg-[#033b63] hidden lg:flex lg:items-center lg:justify-center lg:relative'>
            <img src={FirstBankLogo} className='w-36 border-none' />
        </div>
        <div className='flex flex-col h-screen justify-center items-center lg:w-1/2'>
          <h1 className='text-2xl lg:text-3xl'>Forgot Password</h1>
          <p className='py-1'>No worries, we&apos;ll send you reset instructions.</p>

          <form className='pt-6 pb-4 gap-2'
          onSubmit={handleSubmit}>
            <label>Email
              <br></br>
              <input className='border border-gray-200 bg-gray-100 pl-5 pr-2 w-72 md:w-96 md:pl-5 py-3 mt-1 mb-2 md:py-4 rounded-md font-extralight focus:outline-none focus:bg-white text-[#003B65]'
              placeholder='Please enter your email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              </label>
              <br></br>
              {errorMessage && <p className='text-red-500'>
                {errorMessage}
                </p>}
              <br></br>
              <button className='bg-[#d7bd14] px-24 py-3 my-3 md:my-5 md:px-32 md:py-4 rounded-3xl hover:bg-white hover:border hover:border-[#d7bd14] relative'
              disabled={!email}
              type='submit'>
                Reset Password
              </button>
          </form>
          <aside className='flex flex-row gap-1 font-medium'>
            <span className='mt-0.5 lg:mt-1'>{arrow}</span>
            Back to <span className='text-[#d7bd14]' onClick={() => navigate('/login')}>log in</span>
          </aside>
          <span className='absolute p-2 bg-gray-100 rounded-md bottom-12 right-20'>{<BiExit onClick={() => navigate('/delegates')}/>}</span>
        </div>
      </article>
    </>
  )
}

export default ForgotPassword