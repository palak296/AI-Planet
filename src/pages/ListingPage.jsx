// Importing required components and hooks from React
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Tab from "../components/Tab";

// Creating ListingPage component
const ListingPage = () => {
  // State to hold the hackathon data
  const [hackathonData, sethackathonData] = useState([]);

  // State to keep track of which tab is selected
  const [allSubmissionTab, setallSubmissionTab] = useState(true);

  // Function to handle All Submissions tab
  function handleAllSubmissionTab() {
    setallSubmissionTab(true);
  }

  // Function to handle Favourite Submissions tab
  function handlefavouriteTab() {
    setallSubmissionTab(false);
  }

  // UseEffect hook to get data from localStorage on component mount
  useEffect(() => {
    sethackathonData(JSON.parse(localStorage.getItem("hackathonData")) || []);
  }, []);

  // State to hold search query
  const [search, setSearch] = useState("");

  // Temporarily store the hackathonData
  const tempdata = hackathonData;

  // State to hold sorting order
  const [sortOrder, setSortOrder] = useState("newest");

  // Filter and sort the hackathonData based on search query and sorting order
  const filteredData = tempdata
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "oldest") {
        return new Date(a.uploadTime) - new Date(b.uploadTime);
      } else {
        return new Date(b.uploadTime) - new Date(a.uploadTime);
      }
    });

  // Render the component
  return (
    <div className=" bg-[#F8F9FD]">
      <Hero />
      <div className="flex justify-between my-6 ml-44 mr-64">
        <Tab
          allSubmissionTab={handleAllSubmissionTab}
          favouriteTab={handlefavouriteTab}
          defaultTab={allSubmissionTab}
        />
        <div className="flex flex-wrap mt-5 md:mt-0 md:justify-center items-center gap-5 md:gap-10">
          {/* Search bar */}
          <div className="">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-4 outline-none border border-[#666666] text-[#666666] rounded-[100px] w-72 h-10"
              type="text"
              placeholder="Search"
            />
          </div>
          {/* Render the sorting dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
            className=" outline-none w-36 h-10 rounded-[100px] px-8  border border-[#666666] text-[#666666]"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      {/* Render the cards */}

      <div className="grid-cols-3 grid w-[86%] pl-44">
        {/* Render all submissions if the All Submissions tab is selected */}

        {allSubmissionTab ? (
          filteredData.length != 0 ? (
            filteredData.map((item, index) => {
              return (
                <div key={index}>
                  <Card index={index} item={item} />
                </div>
              );
            })
          ) : (
            <div>Upload Hackathon Submissions</div>
          )
        ) : filteredData.length != 0 ? (
          filteredData.map((item, index) => {
            if (item.favouriteState)
              return (
                <div key={index}>
                  <Card index={index} item={item} />
                </div>
              );
          })
        ) : (
          <div>No Favourite Submissions</div>
        )}
      </div>
    </div>
  );
};

export default ListingPage;
