import React, { useState } from "react";
import PeriodBox from "./PeriodBox";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const AttendancePeriod = ({ setSearchQuery }) => {
  const [startDate, setStartDate] = useState(new Date()); 
  const [endDate, setEndDate] = useState(new Date()); 
  const navigate = useNavigate();

  const handleSelection = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "login") {
      navigate("/login");
    } else if (selectedValue === "signin") {
      navigate("/signin");
    }
  };

  return (
    <div className="flex flex-row my-10">
      <div className="flex basis-1/2 items-center">
        <h3 className="text-sm md:text-lg mr-3 font-bold">Attendance List</h3>
        <PeriodBox>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)} 
            dateFormat="MMM d, yyyy" 
            showMonthDropdown 
            showYearDropdown 
            dropdownMode="select" // Enables dropdowns for month and year
            className="outline-none text-center w-full bg-transparent" 
          />
        </PeriodBox>
        <FaArrowRight className="hidden lg:inline-block text-[#b8b8b8] mt-1 mx-3" />
        <PeriodBox>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)} 
            dateFormat="MMM d, yyyy" 
            showMonthDropdown 
            showYearDropdown 
            dropdownMode="select" // Enables dropdowns for month and year
            className="outline-none text-center w-full bg-transparent"
          />
        </PeriodBox>
      </div>
      <div className="flex basis-1/2 justify-end items-center">
        <input
          type="text"
          name="accountNumber"
          id="accountNumber"
          className="block border border-[#CACACA] rounded-md px-4 text-black placeholder:text-black sm:text-sm sm:leading-6 mr-5"
          placeholder="&#xF002; Search here..."
          style={{ fontFamily: "Poppins, FontAwesome", fontSize: "0.71em" }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <PeriodBox>
          <select
            name="activity"
            id="activity"
            className="outline-none"
            onChange={handleSelection}
          >
            <option value="">Select</option>
            <option value="login">Login</option>
            <option value="signin">Sign up</option>
          </select>
        </PeriodBox>
      </div>
    </div>
  );
};

export default AttendancePeriod;
