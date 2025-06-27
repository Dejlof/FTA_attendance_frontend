import React,{useState, useEffect} from 'react'
import { CurrentUser } from '../utils/AllURLs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const WelcomeMessage = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [error, setError] = useState(null);

  const sessionToken = sessionStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName= async () => {
      
      try {
        const response = await axios.get(`${CurrentUser}`, { 
          withCredentials: true, 
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });
        setCurrentUser(response.data|| []);
        setError(null); 
      } catch (err) {
        const status = err.response?.status;
     if (status === 401) {
      navigate("/login"); 
     }else {
      navigate("/login"); 
      }
      console.error("Error fetching attendance records:", err);
      } 
      
    }

    fetchUserName();
  }, [sessionToken, navigate]);



  
  return (
    <div className='my-6 mb-8'>
      {currentUser ? (
        <>
          <h1 className='text-2xl leading-6 font-semibold '>
            Good Afternoon, <span className='uppercase'>{currentUser.email}</span> 
          </h1>
          <small className='text-[#0000005E]'>You have two notifications</small>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default WelcomeMessage