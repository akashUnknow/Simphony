import Footer from "@/pages/Footer";
import Navbar from "@/pages/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <div className=" bg-white shadow-md">
        <Navbar />
      </div>
      <main className="">
        <Outlet />
      </main>
        <Footer />
    </div>
  );
};

export default Layout;
