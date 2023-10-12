import React from "react";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

const PublicLayout = () => {
  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      <div className="w-full h-full flex flex-col py-4 px-10 bg-off-white">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
