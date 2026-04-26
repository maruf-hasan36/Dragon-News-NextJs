import Image from "next/image";
import Link from "next/link";
import React from "react";
import userLogo from "@/assets/user.png";

const Navbar = () => {
  return (
    <div className=" flex justify-between w-10/12 mx-auto mt-10 ">
      <div></div>
      <ul className="flex justify-between items-center gap-5 text-zinc-700">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About US</Link>
        </li>
        <li>
          <Link href="/career">Career</Link>
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
