import React, { useState } from "react";

function SubmissionSearch({ searchValue, setSearchValue }) {
  return (
    <div className="flex items-center mb-5">
      <input
        id="search"
        type="text"
        className="border rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-20 w-[300px]"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

function SubmissionSort({ sortBy, setSortBy }) {
  return (
    <div className="flex items-center mb-5 ">
      <select
        id="sort"
        className="border rounded-2xl py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-[#666666]"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="newest">Newest </option>
        <option value="oldest">Oldest </option>
      </select>
    </div>
  );
}

function SubmissionFilters({ searchValue, setSearchValue, sortBy, setSortBy }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <SubmissionSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <SubmissionSort sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
}

const Utilities = () => {
  const [searchValue, setSearchValue] = useState();
  const [sortBy, setSortBy] = useState();

  return (
    <div className="flex">
      <SubmissionSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <SubmissionSort sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
};

export default Utilities;
