import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
        {/* Place your content here */}
      </main>
    </>
  );
}
