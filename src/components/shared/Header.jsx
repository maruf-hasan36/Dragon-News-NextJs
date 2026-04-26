import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center py-8 space-y-2 ">
      <Image
        src={logo}
        width={400}
        height={300}
        alt="Logo"
        quality={100}
        className="mx-auto"
      ></Image>
      <h1 className="text-zinc-500 font-semiboldbold">
        Journalism Without Fear or Favour
      </h1>
      <p>{format(new Date(), "EEEE,MMM dd, yyy")}</p>
    </div>
  );
};

export default Header;
