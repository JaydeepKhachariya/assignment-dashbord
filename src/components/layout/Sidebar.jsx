import React, { useState } from "react";
import { sidebarItems } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(isSidebarVisible);

  // const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="h-full bg-primary text-white p-6 lg:w-1/5  flex-col items-center justify-between hidden md:flex">
        <div className="w-full flex flex-col items-start justify-start gap-10">
          <h1 className="text-2xl font-semibold">Dashbord</h1>
          <ul className="flex flex-col items-start justify-start gap-3 w-full">
            {sidebarItems.map((el) => {
              return (
                <div
                  key={el.id}
                  onClick={() => navigate(el.link)}
                  className={`w-full flex items-center justify-between ${
                    location.pathname === el.link ? "bg-secondry" : null
                  } p-2 rounded-md`}
                >
                  <li className="w-full flex items-center justify-start gap-2">
                    {el.label}
                  </li>
                  {location.pathname === el.link ? null : (
                    <BsChevronRight className="text-sm" />
                  )}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="w-full bg-secondry h-16 rounded-md p-2 flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <div className="h-10 w-10 rounded-full bg-white"></div>
            <div className="">
              <p className="text-sm">Evano</p>
              <p className="text-xs text-gray-500">Product Manager</p>
            </div>
          </div>
          <BsChevronDown className="text-sm" />
        </div>
      </div>
      {/* {isSidebarVisible ? ( */}
      <div
        className={`w-[200px] p-2 bg-primary text-white h-full fixed z-50 top-0 left-0 flex flex-col items-center justify-between transition-all ${
          isSidebarVisible ? null : "translate-x-[-200px]"
        }`}
      >
        <div className="w-full flex flex-col items-start justify-start gap-10">
          <h1 className="text-lg font-semibold w-full flex items-center justify-between">
            Dashbord{" "}
            <span onClick={toggleSidebar}>
              <MdClose />
            </span>
          </h1>
          <ul className="flex flex-col items-start justify-start gap-3 w-full">
            {sidebarItems.map((el) => {
              return (
                <div
                  key={el.id}
                  onClick={() => navigate(el.link)}
                  className={`w-full flex items-center justify-between ${
                    location.pathname === el.link ? "bg-secondry" : null
                  } p-2 rounded-md`}
                >
                  <li className="w-full flex items-center justify-start gap-2 text-sm">
                    {el.label}
                  </li>
                  {location.pathname === el.link ? null : (
                    <BsChevronRight className="text-sm" />
                  )}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="w-full bg-secondry h-16 rounded-md p-2 flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <div className="h-10 w-10 rounded-full bg-white"></div>
            <div className="">
              <p className="text-sm">Evano</p>
              <p className="text-xs text-gray-500">Product Manager</p>
            </div>
          </div>
          <BsChevronDown className="text-sm" />
        </div>
      </div>
      {/* ) : null} */}
    </>
  );
};

export default Sidebar;
