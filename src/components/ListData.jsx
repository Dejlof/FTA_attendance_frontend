import React from 'react';
import attendance from '../attendance.json';


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
            <table className="table-auto text-center bg-white w-full text-s lg:text-sm mr-20">
                <thead className='p-3'>
                    <tr className='h-14 text-[#969595]'>
                        <th>Delegates Name</th>
                        <th>Cohort</th>
                        <th>Login Time</th>
                        <th>Apperances</th>
                        <th>%App</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody className='p-3'>
                    {attendance.map((data, index) => (
                        <tr key={index} className='border-b-1 border-solid border-t-2 border-gray-200 h-14 p-3 font-semibold'>
                            <td  > 
                               {data.name}
                               </td>
                            <td>{data.cohort}</td>
                            <td>{data.time}</td>
                            <td>{data.app} days <div className='inline-flex ml-2 px-1 py-1 rounded-full' style={{ background: data['app-time'] === "Early" ? '#003B65' : data['app-time'] === "On time" ? '#FFB200' : '#FF0000' }} ></div> <div className='inline-flex' style={{ fontSize: '0.7em' }}>{data['app-time']}</div></td>
                            <td><div className='py-0.5 px-0.1 rounded-lg' style={{ background: percentageColor(data.percentage) }}>{data.percentage}%</div></td>
                            <td><a href="" className='underline p-1 lg:p-0'>View Details</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListData;


