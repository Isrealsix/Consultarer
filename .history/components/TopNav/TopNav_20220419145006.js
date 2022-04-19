import Link from "next/link";
import React from "react";
import Logo from "../svgs/logo.svg";
import NavItems from "./NavItems";

// svg-icons

import Briefcase from "../svgs/briefcase.svg";
import Hub from "../svgs/ash-02.svg";
import Bell from "../svgs/bell.svg";
import Msg from "../svgs/msg.svg";
import Fav from "../svgs/fav.svg";
import Profile from "../svgs/unsplash_x9cXI2eQLBw.svg";

export const TopNav = () => {
  return (
    <div>
      <h1> logo Working </h1>
      <Logo className=" text-6xl " />

      <div className="nav">
        <NavItems
          title="Welcome"
          icon={<Briefcase className="text-6xl bg-red-200" />}
        />

        <NavItems
          title="Hub"
          icon={<Hub className="text-6xl bg-red-200" />}
        />

        <NavItems
          title="Notification"
          icon={<Bell className="text-6xl bg-red-200" />}
        />

        <NavItems
          title="Message"
          icon={<Msg className="text-6xl bg-red-200" />}
        />


        <NavItems
          title="Welcome"
          icon={<Briefcase className="text-6xl bg-red-200" />}
        />

        <NavItems
          title="Welcome"
          icon={<Briefcase className="text-6xl bg-red-200" />}
        />

      </div>
    </div>
  );
};
