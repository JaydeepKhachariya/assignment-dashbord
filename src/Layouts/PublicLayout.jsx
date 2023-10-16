import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

const PublicLayout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    console.log("first");
  };

  return (
    <div className="w-full flex h-screen">
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <div className="w-full h-full flex flex-col p-2 sm:py-4  sm:px-10 bg-off-white">
        <Header toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
