import React from "react";

import Navbar from "../admin/Navbar";
import { SideBar } from "../admin/SideBar";

const AdminLayout = (props) => {
  return (
    <div className="antialiased">
      <Navbar />
      <section className="grid grid-cols-6">
        <SideBar />
        {props.children}
      </section>
    </div>
  );
};

export default AdminLayout;
