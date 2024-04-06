import React from 'react'
import attendance from '../attendance.json'





const ListData = () => {
    const percentageColor = (percentage) => {
        if (percentage === 100) {
          return '#F0BD2D';
        } else if (percentage >= 80) {
          return '#45FF9B';
        } else {
          return 'gray';
        }
      };
     
   
  return (
    <div>
       <table class="table-auto text-center bg-white w-full text-sm mr-20">
                <thead> 
                    <tr className='h-14 text-[#969595]'>
                        <th>Delegates Name</th>
                        <th>Cohort</th>
                        <th>Login Time</th>
                        <th>Apperances</th>
                        <th>%App</th>
                        <th>Profile</th>
                       
                    </tr>
                </thead>
                <tbody>
        {attendance.map((data)=>(
             <tr className='border-b-1 border-solid border-t-2 border-gray-200 h-14 p-3 font-semibold'>
            <td>
                {data.name}
                </td>
            <td>{data.cohort}</td>
            <td>{data.time}</td>
            <td >{data.app}</td>
            <td> <div className='py-0.5 px-0.1 rounded-lg' style={{background:percentageColor(data.percentage)}}>{data.percentage}%</div></td>
            <td><a href="" className='underline'>View Details</a></td>
            </tr>
        ))} 
                   

                </tbody>
            </table>
    </div>
  )
}

export default ListData
