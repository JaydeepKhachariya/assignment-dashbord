import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

const Header = ({ setIsShow, isShow }) => {
  const [show, setShow] = useState();

  return (
    <div className="h-[60px]  w-full flex items-center justify-between">
      <div className="flex items-center justify-center gap-2 ">
        <HiMenu
          className="text-2xl block md:hidden"
          onClick={() => setShow(true)}
        />
        <p>Hello Shahrukh 👋,</p>
      </div>
      <div className="bg-white sm:min-w-[150px] max-w-[150px] w-auto p-2 h-3/5 flex items-center justify-start gap-2 rounded-md">
        <FiSearch className="text-xl" />
        <input
          className="outline-none w-2/4"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Header;
