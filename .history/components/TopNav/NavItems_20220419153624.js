import Link from "next/link";
import React from "react";

const NavItems = ({ title, icon }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/#" passHref={true}>
            <a className="lg:inline-block flex-col items-center  ">
            <span>{icon}</span>
            {title}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
