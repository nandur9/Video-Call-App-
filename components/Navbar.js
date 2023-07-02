import React from "react";
import logo from "../assets/new.png";
const Navbar = () => {
  return (
    <div className="bg-black/90">
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        {/* Left */}
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem]">
            <img src={logo} alt="" className="object-cover  bg-black" />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">𝙑𝙞𝙙𝙚𝙤 𝘾𝙖𝙡𝙡 𝘼𝙥𝙥</p>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
            <li>About Us</li>
            <li>Product</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;