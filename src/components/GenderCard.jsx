import React from "react";
import CardsIcon from "./CardsIcon";
import cardIcon from "../assets/images/Card-icon.jpg";
import GenderChart from "./GenderChart";

const GenderCard = () => {
  return (
    <div className="flex-[.5] p-6   bg-white  rounded ">
      <div className="flex items-center justify-between">
        <h1>Students by Gender</h1>
        <CardsIcon>
          <img src={cardIcon} alt="" />
        </CardsIcon>
      </div>
      <GenderChart />
    </div>
  );
};

export default GenderCard;
