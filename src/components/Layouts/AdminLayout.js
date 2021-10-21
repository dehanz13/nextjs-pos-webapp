import React from "react";

import Navbar from "../admin/Navbar";
import { SideBar } from "../admin/SideBar";

const AdminLayout = ({ children }) => {
  return (
    <div className="antialiased">
      <Navbar />
      <section className="grid grid-cols-6">
        <SideBar />
        {children}
      </section>
    </div>
  );
};

export default AdminLayout;
