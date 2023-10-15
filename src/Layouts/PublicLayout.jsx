import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

const PublicLayout = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="w-full flex h-screen">
      <Sidebar isShow={isShow} />
      <div className="w-full h-full flex flex-col p-2 sm:py-4  sm:px-10 bg-off-white">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
