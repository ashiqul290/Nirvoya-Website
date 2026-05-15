import React from "react";
import { Container } from "../../Common/Container";
import Groceres from "../../assets/Banner/placeholder.png";
import beauty from "../../assets/Banner/placeholder (1).png";
import sliderimg from "../../assets/Banner/image.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerRes = () => {
  return (
    <>
       <div className="px-5 lg:px-0 lg:hidden mt-5 ">
            {/* LEFT SLIDER */}
            <div className=" w-full">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                //   navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="w-full h-full"
              >
               
                <SwiperSlide>
                  <div className="  rounded-[10px]  relative">
                    <img src={sliderimg} className="w-full" alt="" />
                    <div className=" absolute md:top-20 top-2 xs:left-4 left-2  2xs:left-8 2xs:top-5 sm:top-13 lg:left-15 sm:left-15">
                      <h1 className=" text-[#0970CD] font-bold md:text-[45px] 2xs:text-[25px] font-montserrat w-50 2xs:w-60 mt-2 sm:text-[35px] sm:w-80 xs:mt-6 md:w-121.5 ">
                        Explore Men’s Winter Collection
                      </h1>
                      <p className=" mt-2 xs:mt-3  text-sm 2xs:text-[16px] md:text-[20px] font-poppins font-normal leading-4 sm:leading-9 md:leading-10 text-[#646464] w-40 xs:w-50 md:w-104.5 2xs:w-60 2xs:leading-6 sm:text-[20px] sm:w-90 md:my-6.75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.{" "}
                      </p>
                      <button className="mt-4 md:px-6.25 px-2 py-1 md:py-2.5 sm:px-4 2xs:px-3 2xs:py-2 sm:py-3 text-white bg-[#0198E9] rounded-[5px] font-poppins font-semibold text-sm md:text-[16px]">
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div className="w-231.25 h-140.75 rounded-[10px] relative">
                    <img src={sliderimg} alt="" />
                    <div className=" absolute top-37 left-15">
                      <h1 className=" text-[#0970CD] font-bold text-[45px] font-montserrat max-w-121.5 ">
                        Explore Men’s Winter Collection
                      </h1>
                      <p className=" text-[20px] font-poppins font-normal leading-10 text-[#646464] w-104.5 my-6.75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.{" "}
                      </p>
                      <button className=" px-6.25 py-2.5 text-white bg-[#0198E9] rounded-[5px] font-poppins font-semibold text-[16px]">
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-231.25 h-140.75 rounded-[10px] relative">
                    <img src={sliderimg} alt="" />
                    <div className=" absolute top-37 left-15">
                      <h1 className=" text-[#0970CD] font-bold text-[45px] font-montserrat max-w-121.5 ">
                        Explore Men’s Winter Collection
                      </h1>
                      <p className=" text-[20px] font-poppins font-normal leading-10 text-[#646464] w-104.5 my-6.75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.{" "}
                      </p>
                      <button className=" px-6.25 py-2.5 text-white bg-[#0198E9] rounded-[5px] font-poppins font-semibold text-[16px]">
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>

            <div className="">
              <div className="w-md h-66.75 hidden lg:block rounded-[10px] relative">
                <img src={Groceres} alt="" />
                <div className=" absolute bottom-4.5 left-22.5">
                  <button className=" rounded-[10px] bg-[#FAFAFA]/80 px-8 py-4 text-[#0198E9] font-semibold font-montserrat text-[20px]">
                    Groceries collection
                  </button>
                </div>
              </div>
              <div className="w-md h-66.75 hidden lg:block relative mt-7 rounded-[10px]">
                <img src={beauty} alt="" />
                <div className=" absolute bottom-4.5 left-13.5">
                  <button className=" rounded-[10px] bg-[#FAFAFA]/80 px-8 py-4 text-[#0198E9] font-semibold font-montserrat text-[20px]">
                    Health & Beauty collection
                  </button>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default BannerRes
