import React from "react";
import CardsIcon from "./CardsIcon";
import cardIcon from "../assets/images/Card-icon.jpg";
import delegate1 from "../assets/images/delegate1.jpg";
import delegate2 from "../assets/images/delegate2.jpg";
import delegate3 from "../assets/images/delegate3.jpg";
import delegate4 from "../assets/images/delegate4.jpg";
const Delegates = [
  {
    name: "Olamilekan Michael",
    percent: "100%",
    day: 156,
    img: delegate1,
  },
  {
    name: "Rachael John",
    percent: "97%",
    day: 153,
    img: delegate2,
  },
  {
    name: "John Riz",
    percent: "96%",
    day: 152,
    img: delegate3,
  },
  {
    name: "Hersey Mark",
    percent: "95%",
    day: 151,
    img: delegate4,
  },
];

const DelegatesCard = () => {
  return (
    <div className="flex-[.5] p-6  bg-white rounded ">
      <div>
        <div className="flex items-center justify-between">
          <h1>Top 4 Delegates</h1>
          <CardsIcon>
            <img src={cardIcon} alt="" />
          </CardsIcon>
        </div>
        {Delegates.map((items, index) => (
          <div key={index} className="flex w-full pt-2 border-t-[0.5px] border-t-[grey] pb-2 gap-6 items-center mt-10">
            <div className="flex w-[80%] gap-2 items-center">
              <img src={items.img} alt={items.name}/>
              <p className="text-xs text-[grey]">{items.name}</p>
              <p className=" ml-auto text-xs">{items.percent}</p>
            </div>
            <div>
              <p className="text-[12px] text-[black]">
                {items.day}
                <span className="ml-2 text-xs text-[grey]">days</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DelegatesCard;
