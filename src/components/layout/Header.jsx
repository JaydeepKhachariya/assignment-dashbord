import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="h-[60px]  w-full flex items-center justify-between">
      <p>Hello Shahrukh 👋,</p>
      <div className="bg-white min-w-[150px] w-auto p-2 h-3/5 flex items-center justify-start gap-2 rounded-md">
        <FiSearch className="text-xl" />
        <input className="outline-none" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
