// import React, { useState } from "react";
// import Calendar from "react-calendar";
// // import { Calendar as StyledCalendar } from "@emotion/react";
// import {
//    MdOutlineArrowCircleLeft,
//    MdOutlineArrowCircleRight,
// } from "react-icons/md";

// const DashboardCalendar = () => {
//    const [selectedDate, setSelectedDate] = useState(new Date());

//    const handleDateChange = (date) => {
//       setSelectedDate(date);
//    };

//    const customNavigation = ({ prev2Label, next2Label }) => (
//       <div className="flex justify-between items-center">
//          <button className="hover:bg-gray-200 p-1 rounded-full focus:outline-none">
//             <MdOutlineArrowCircleLeft />
//          </button>
//          <span className="text-lg font-medium">{prev2Label}</span>
//          <span className="text-lg font-medium">{next2Label}</span>
//          <button className="hover:bg-gray-200 p-1 rounded-full focus:outline-none">
//             <MdOutlineArrowCircleRight />
//          </button>
//       </div>
//    );

//    return (
//       <div className="calendar flex-[.3]">
//          {" "}
//          {/* Optional: Apply Tailwind class for styling */}
//          <Calendar
//             value={selectedDate}
//             onChange={handleDateChange}
//             navigation={customNavigation}
//             className="react-calendar" // Apply class to container for global styles
//             tileClassName={({ date, active }) =>
//                // Add custom classes based on active (selected) state
//                `react-calendar__tile ${
//                   active ? "bg-red text-white rounded-full" : ""
//                }`
//             }
//          />
//       </div>
//    );
// };

// export default DashboardCalendar;

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [date, changeDate] = useState(new Date());

  function changeValue(val) {
    changeDate(val);
  }

  return (
    <div className="calendar flex-[.35] h-full">
      <div className="h-full w-full">
        <Calendar
          onChange={changeValue}
          value={date}
          minDate={new Date(2001, 1, 11)} // To set minimum date
          maxDate={new Date(2200, 12, 22)} // To set maximum date
          showWeekNumbers={true} // TO show week numbers
          showNeighboringMonth={true}
          calendarType="US" // Changing the calender type
          tileDisabled={({ date }) => date.getDay() === 0} // Disabaling the sunday
        />
      </div>
    </div>
  );
}

export default App;
