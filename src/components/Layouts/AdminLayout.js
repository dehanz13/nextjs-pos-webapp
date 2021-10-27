import React from "react";

import Navbar from "../admin/Navbar";
import { SideBar } from "../admin/SideBar";
import Footer from "../Footers/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className="antialiased">
      <Navbar />
      <section className="grid grid-cols-6 h-screen">
        <SideBar />
        <div className="col-span-5 p-5">{children}</div>
      </section>
    </div>
  );
};

export default AdminLayout;
