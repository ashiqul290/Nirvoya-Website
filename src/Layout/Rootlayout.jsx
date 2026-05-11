import React from "react";
import { Outlet } from "react-router";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";
import ScrollToTop from "../Common/TopToScroll";

const Rootlayout = () => {
  return (
    <>
    <ScrollToTop />
    <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
