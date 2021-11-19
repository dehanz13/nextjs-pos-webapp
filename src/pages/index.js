import React from "react";
import Link from "next/link";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer";
import LandingLayout from "../components/Layouts/LandingLayout";
import LandingPage from "./landing";

const Home = () => {
  return (
    <LandingLayout>
      <LandingPage />
    </LandingLayout>
  );
};

export default Home;
