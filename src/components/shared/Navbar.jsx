import Image from "next/image";
import React from "react";
import userLogo from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className=" flex justify-between w-10/12 mx-auto mt-10 ">
      <div></div>
      <ul className="flex justify-between items-center gap-5 text-zinc-700">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

      <div className="flex gap-3 items-center">
        <Image
          src={userLogo}
          alt="user"
          height={50}
          width={50}
          quality={100}
        ></Image>
        <button className="btn bg-zinc-700 px-10 text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
