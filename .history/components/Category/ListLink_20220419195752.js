import Link from "next/link";
import React from "react";
import CatLinkData from "../../utils/CatLinkdata";

const ListLink = () => {
  const data = CatLinkData;
  {data.map((link => ( 
    <li key={link.id}>{link.Category}</li>
  )))}
  return (
    <div className="relative ">
      <ul className=" bg-red-200 w-full inline-flex justify-between">
       
      </ul>
    </div>
  );
};

export default ListLink;
