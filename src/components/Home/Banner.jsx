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

export const Banner = () => {
  return (
    <>
      <div className=" py-2.5 px-5 lg:px-0">
        <Container>
          <div className="flex gap-6.75 items-center">
            {/* LEFT SLIDER */}
            <div className="lg:w-[65%]">
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
                  <div className="lg:w-231.25 w-120 sm:w-130  xl:h-140.75 rounded-[10px] relative">
                    <img src={sliderimg}  alt="" />
                    <div className=" top-4 left-5 absolute xl:top-37 xl:left-15">
                      <h1 className=" text-[#0970CD] font-bold xl:text-[45px] font-montserrat max-w-121.5 w-50">
                        Explore Men’s Winter Collection
                      </h1>
                      <p className=" md:text-[20px] font-poppins font-normal md:leading-10 text-[#646464] max:w-104.5 w-45 text-sm md:my-6.75 my-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.{" "}
                      </p>
                      <button className=" md:px-6.25 px-1 py-1 md:py-2.5 text-white bg-[#0198E9] rounded-[5px] font-poppins font-semibold text-sm md:text-[16px]">
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
        </Container>
      </div>
    </>
  );
};
