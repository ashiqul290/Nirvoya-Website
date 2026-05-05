import React from "react";
import { Container } from "../../Common/Container";
import logo from '../../assets/HeaderImg/logo.png'
import icon1 from '../../assets/Footer/main/Facebook.png'
import icon2 from '../../assets/Footer/main/Tw.png'
import icon3 from '../../assets/Footer/main/Ld.png'
import icon4 from '../../assets/Footer/main/instagram.png'
import headicon from '../../assets/Footer/main/Vector (9).png'
export const FooterMain = () => {
  return (
    <>
      <div className="my-15">
        <Container>
          <div className=" flex justify-between">
            <div className="">
                <img src={logo} alt="" />
                <p className=" font-poppins text-[18px] leading-7 text-[#333333] mb-6.75 mt-8.75 w-97.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className=" flex gap-5 ">
                    <img src={icon1} className=" w-10.25" alt="" />
                    <img src={icon2} className=" w-10.25" alt="" />
                    <img src={icon3} className=" w-10.25" alt="" />
                    <img src={icon4} className=" w-10.25" alt="" />
                </div>
            </div>
            <div className="">
                <h4 className=" font-poppins text-[20px] font-medium text-[#333333]">QUICK LINKS</h4>
                <ul className="mt-6.25">
                    <li className=" font-poppins text-[18px] font-normal leading-11 text-[#333333]/80">About us</li>
                    <li className=" font-poppins text-[18px] font-normal leading-11 text-[#333333]/80">Contact us</li>
                    <li className=" font-poppins text-[18px] font-normal leading-11 text-[#333333]/80">Products</li>
                    <li className=" font-poppins text-[18px] font-normal leading-11 text-[#333333]/80">Login</li>
                    <li className=" font-poppins text-[18px] font-normal leading-11 text-[#333333]/80">Sign Up</li>
                </ul>
            </div>
            <div className="">
                <h4 className=" font-poppins text-[20px] font-medium text-[#333333]">CUSTOMER AREA</h4>
                <ul className="mt-6.25">
                    <li className="font-poppins text-[18px] font-normal leading-11 text-[#333333]/80">My Account</li>
                    <li className="font-poppins text-[18px] font-normal leading-11 text-[#333333]/80">Orders</li>
                    <li className="font-poppins text-[18px] font-normal leading-11 text-[#333333]/80">Terms</li>
                    <li className="font-poppins text-[18px] font-normal leading-11 text-[#333333]/80">Privacy Policy</li>
                    <li className="font-poppins text-[18px] font-normal leading-11 text-[#333333]/80">Shipping Information</li>
                </ul>
            </div>
            <div className="">
                <h4 className=" font-poppins text-[20px] font-medium text-[#333333]">CONTACT</h4>
               <p className="text-[#333333]/80 text-[16px] font-normal font-poppins leading-6 max-w-85 mb-7.75 mt-6.25">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
               <div className=" flex items-center gap-6.75">
                    <img src={headicon} className="w-12" alt="" />
                <div className="">
                    <h3 className=" text-[18px] font-poppins text-[#333333] font-normal">Have any question?</h3>
                    <h4 className=" font-poppins text-[#0198E9] text-[28px] font-semibold">099 456 789</h4>
                </div>
               </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
