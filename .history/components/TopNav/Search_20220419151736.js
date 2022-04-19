import React from "react";
import SearchIcon from "../svgs/search.svg";

const Search = () => {
  return (
    <div className=" flex items-center  relative bg-[#E9E1E1] justify-between pr-3 rounded-lg group ">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search users, services, skills topics, tags... "
        className="bg-[#E9E1E1] py-3 px-2 w-full rounded-lg border-0 focus:outline-0 text-gray-600 "
      />
      <SearchIcon className='transition-all hover:scale'/>
    </div>
  );
};

export default Search;
