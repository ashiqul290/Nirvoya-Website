import React from "react";
import { Outlet } from "react-router";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";
import ScrollToTop from "../Common/TopToScroll";

const Rootlayout = () => {
  return (
    <>
   <div className="mx-5 md:px-0">
     <ScrollToTop />
    <Header />
      <Outlet />
      <Footer />
   </div>
    </>
  );
};

export default Rootlayout;
