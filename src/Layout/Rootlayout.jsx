import React from "react";
import { Outlet } from "react-router";
import { Header } from "../Common/Header";

const Rootlayout = () => {
  return (
    <>
    <Header />
      <Outlet />
    </>
  );
};

export default Rootlayout;
