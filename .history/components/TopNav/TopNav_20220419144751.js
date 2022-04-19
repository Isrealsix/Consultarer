import Link from "next/link";
import React from "react";
import Logo from "../svgs/logo.svg";
import NavItems from "./NavItems";

// svg-icons

import Briefcase from "../svgs/briefcase.svg";
import ash from "../svgs/ash-02.svg";
import bell from "../svgs/bell.svg";
import msg from "../svgs/msg.svg";
import fav from "../svgs/fav.svg";
import profile from "../svgs/unsplash_x9cXI2eQLBw.svg";

export const TopNav = () => {
  return (
    <div>
      <h1> logo Working </h1>

      <Briefcase className="text=6xl" />
      <Logo className=" text-6xl " />
      <NavItems title="Welcome" icon={<Briefcase className="text-6xl bg-red-200" />} />
    </div>
  );
};
