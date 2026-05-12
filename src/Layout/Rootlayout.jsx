import React from "react";
import { Outlet } from "react-router";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";
import ScrollToTop from "../Common/TopToScroll";

const Rootlayout = () => {
  return (
    <>
   <div className="">
     <ScrollToTop />
    <Header />
      <Outlet />
      <Footer />
   </div>
    </>
  );
};

export default Rootlayout;
