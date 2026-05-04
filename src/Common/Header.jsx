import React from "react";
import { Container } from "./Container";
import logo from "../assets/HeaderImg/logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import union from "../assets/HeaderImg/Union.png";
export const Header = () => {
  return (
    <>
      <div className=" border-b border-gray-100">
        <Container>
          <div className=" flex items-center justify-between my-8.25">
            <div className="">
              <img src={logo} alt="Logo" />
            </div>
            <div className=" bg-gray-100 w-194.5 flex justify-between rounded-l-[10px] rounded-r-[10px]">
              <input
                type="text"
                className="w-full outline-none py-3.25 pl-5"
                placeholder="I'm looking for..."
              />
              <button className="w-16  flex justify-center items-center rounded-r-[10px] text-white bg-[#0970CD] text-[28px] cursor-pointer   ">
                <IoIosSearch />
              </button>
            </div>
            <div className=" flex items-center gap-10">
              <button className="text-[16px] font-normal flex gap-0.75 items-center cursor-pointer">
                {" "}
                <CiUser  className=" text-[24px]"/> Login
              </button>
              <button className="text-[16px] font-normal flex gap-0.75 items-center cursor-pointer">
                {" "}
                <CiHeart className=" text-[24px]" /> Wishlist
              </button>
              <button className="text-[16px] font-normal flex gap-0.75 items-center cursor-pointer">
                {" "}
                <img src={union} alt="Cart" /> my Cart
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
