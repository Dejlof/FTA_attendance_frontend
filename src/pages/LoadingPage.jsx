import React from "react";
import FirstBankLogo from "../assets/images/FBNLogo.jpg";

const LoadingPage = () => {
  return (
    <div className="flex h-full w-full bg-[#033b63] justify-center items-center">
      <aside className="relative">
        <div className="border-4 border-yellow-500 border-t-4 border-t-blue-800 bg-white rounded-full w-16 lg:w-[4.5rem] h-16 lg:h-[4.5rem] animate-spin"></div>
        <img
          src={FirstBankLogo}
          alt="Loader"
          className="absolute inset-0 m-auto w-8 lg:w-[2.5rem] h-8 lg:h-[2.5rem] p-1 bg-white"
        />
      </aside>
    </div>
  );
};

export default LoadingPage;
