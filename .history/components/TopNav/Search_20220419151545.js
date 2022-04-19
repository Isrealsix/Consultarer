import React from "react";
import SearchIcon from "../svgs/search.svg";

const Search = () => {
  return (
    <div className=" flex items-center  relative bg-[#E9E1E1] justify-between pr-3 rounded-lg focus:bg-white ">
      <input
        type="text"
        name="search"
        id="search"
        value=""
        placeholder="Search users, services, skills topics, tags... "
        className="bg-[#E9E1E1] py-3 px-2 w-full rounded-lg border-0 focus:outline-0 focus:bg-white  "
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
