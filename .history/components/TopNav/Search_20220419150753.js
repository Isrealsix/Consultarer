import React from "react";
import SearchIcon from "../svgs/search.svg";

const Search = () => {
  return (
    <div className=" flex items-center  relative " >
      <input
        type="text"
        name="search"
        id="search"
        value={query}
        placeholder="Search users, services, skills topics, tags... "
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
