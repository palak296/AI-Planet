import React from "react";

const Tab = ({ allSubmissionTab, favouriteTab, defaultTab }) => {
  return (
    <div className=" flex text-[#666666]">
      <button
        className={`font-bold hover:cursor-pointer focus:text-black ${
          defaultTab ? "border-b-4 border-[#44924C]" : ""
        }`}
        onClick={allSubmissionTab}
      >
        All Submissions
      </button>
      <button
        className={`font-bold mx-20 hover:cursor-pointer focus:text-black focus:border-b-4 focus:border-[#44924C] ${
          !defaultTab ? "border-b-4 border-[#44924C]" : ""
        }`}
        onClick={favouriteTab}
      >
        Favourite Submissions
      </button>
    </div>
  );
};

export default Tab;
