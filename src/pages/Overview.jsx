import React from "react";
import SearchHeader from "../components/SearchHeader";
import WelcomeMessage from "../components/WelcomeMessage";

const Overview = () => {
   return (
      <div className="basis-4/5 mr-8 py-10">
         <SearchHeader />
         <WelcomeMessage />
      </div>
   );
};

export default Overview;
