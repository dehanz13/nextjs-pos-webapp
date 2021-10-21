import React from "react";

import Navbar from "../Navbars/IndexNavbar";
import Footer from "../Footers/Footer";

const LandingLayout = ({ children }) => {
  return (
    <div className="antialiased">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
