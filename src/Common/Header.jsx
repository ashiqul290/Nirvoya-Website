import React from "react";
import { Container } from "./Container";
import logo from "../assets/HeaderImg/logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import union from "../assets/HeaderImg/Union.png";
export const Header = () => {
 const categories = [
  {
    name: "Women's Fashion",
    subcategories: [
      {
        name: "Saree",
        items: [
          "Cotton","Silk","Katan","Muslin","Jamdani",
          "Georgette","Nokshi Kantha","Linen","Khadi",
          "Tangail Taat","Monipuri","Dhakai Jamdani"
        ]
      },
      {
        name: "Clothes",
        items: [
          "T-shirt","Shorts","Shirt","Track suit",
          "Jeans","Georgette","Waistcoat",
          "Sweater","Coats","Suit","Sweatshirt","Uniform"
        ]
      },
      {
        name: "Cosmetic",
        items: [
          "Perfume","Eye make-up","Skin care","Hair care",
          "Make-up","Oral Care","Body Care","Sanitary pad",
          "Shower gels & creams","Hair Removal Products",
          "Lipstick","Suntan cream"
        ]
      },
      {
        name: "Sports & Outdoor",
        items: [
          "Sweatshirt","T-shirt","Sports Bra","Leggings",
          "Tracksuit","Running Shoes","Sports Bag",
          "Sports Equipment","Outdoor Shoes","Snow Boot",
          "Outdoor Equipment","Sports Accessories"
        ]
      },
      {
        name: "Personal Care",
        items: [
          "Perfume","Sexual Health","After Shave Products","Razor blade"
        ]
      },
      {
        name: "Shoes",
        items: [
          "Heeled shoes","sneakers","Casual Shoes","Babet",
          "Sandals","Slippers"
        ]
      }
    ]
  },
  {
    name: "Men's Fashion",
  },
  {
    name: "Home & Lifestyle",
  },
  {
    name: "Sports & Outdoor",
  },
  {
    name: "Health & Beauty",
  },
  {
    name: "Arts & Crafts",
  },
  {
    name: "Computer & Electronics",
  },
  {
    name: "Food & Grocery",
  },
];
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
          <div className="mb-2.5">
            <ul className=" flex justify-between ">
              {
                categories.map((item)=>(

                  <li className="text-[16px] text-[#333333] relative uppercase font-medium cursor-pointer hover:text-[#0970CD] duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-0.5 after:w-0 after:bg-[#0970CD] after:duration-500 hover:after:w-full">{item.name}</li>
                ))
              }
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};
