import React from "react";
import { Outlet } from "react-router";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";

const Rootlayout = () => {
  return (
    <>
    <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
