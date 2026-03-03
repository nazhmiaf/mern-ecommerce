import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BottomNav from "../components/ButtomNav";

const PublicLayout = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
        <Nav />
      </div>
      <div className="sm:pt-20 pt-14">
        <Outlet />
      </div>
      <BottomNav />
      <Footer />
    </>
  );
};

export default PublicLayout;
