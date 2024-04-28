import React from 'react';
import FirstBankLogo from '../assets/images/FirstBankLogo.jpg';
import { BiExit } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const PasswordReset = () => {
  const [code, setCode] = React.useState(['', '', '', '', '']);
  const inputRefs = React.useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;

    if (value !=='' && index < 4) {
      inputRefs.current[index + 1].focus();
    }
    setCode(newCode);
  };

  const handleKeyPress = (index, el) => {
    if (el.key === 'Backspace') {
      if (index > 0) {
        setCode((prevCode) => {
          const newCode = [...prevCode];
          newCode[index] === '';
          return newCode;
        });
        inputRefs.current[index - 1].focus();
        setActiveIndex(index - 1);
      } else if (index === 0) {
        setCode((prevCode) => {
          const newCode = [...prevCode];
          newCode[index] === '';
          return newCode;
        });
        setActiveIndex(null);
      }
    }
  };

  const handleMouseEnter = (index) => {
    if (index === code.length - 1 && code[index] === '') {
      setActiveIndex(index - 1);
    } else {
      setActiveIndex(index);
    }
  };
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  const handleClick = (index) => {
    if (index === code.length - 1 && code[index] === '') {
      setActiveIndex(index - 1);
    } else {
      setActiveIndex(index);
    }
  };

  const navigate = useNavigate();
  const arrow = (
    <svg width='10' height='10'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
    </svg>
  );

  return (
    <>
    <article className='flex h-screen flex-col lg:flex-row text-[#003B65] text-xs lg:text-sm'>
        <div className='lg:w-1/2 lg:bg-[#033b63] hidden lg:block lg:relative'>
            <img src={FirstBankLogo} className='w-36 absolute top-56 right-64 border-none' />
        </div>
        <div className='flex flex-col h-screen justify-center items-center lg:w-1/2'>
            <h1 className='text-2xl lg:text-3xl'>Password Reset</h1>
            <p className='py-1'>We sent a code to {}</p>

            <section className='flex pt-8 pb-6'>
              {code.map((value, index) => (
                <input key={index}
                type='text'
                maxLength={1}
                value={value}
                onChange={(event) => handleChange(index, event.target.value)}
                onKeyPress={(event) => handleKeyPress(index, event)}
                ref={(el) => (inputRefs.current[index] = el)}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave}
                className='focus:outline-none'
                style={{ width: '45px',
                height: '50px',
                marginRight: '10px',
                border: `2px solid ${activeIndex === index ? '#d7bd14' : 'none' }`,
                borderRadius: '5px',
                textAlign: 'center',
                backgroundColor: `${activeIndex === index ? '#fff' : '#efefef'}`,
              }}
                />
              ))}
                <br></br>
            </section>
            <button className='bg-[#d7bd14] px-32 py-3 my-3 md:my-5 md:px-40 md:py-4 rounded-2xl hover:bg-white hover:border hover:border-[#d7bd14] relative'>
              Continue
            </button>

            <aside className='py-3 md:py-4'>
              Didn&apos;t receive any mail? <span className='underline text-[#d7bd14]'>Click to resend</span>
            </aside>

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

export default PasswordReset