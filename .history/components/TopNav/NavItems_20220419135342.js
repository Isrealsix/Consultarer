import Link from "next/link";
import React from "react";
import LinkData from '../../utils/LinkData';

const NavItems = () => {
  return (
    <div>
     {LinkData.map((link) => {
         return <Link 
     })}
    </div>
  );
};

export default NavItems;
