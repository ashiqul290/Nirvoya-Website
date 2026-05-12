import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import logo from "../assets/HeaderImg/logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import union from "../assets/HeaderImg/Union.png";
export const Header = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShow(true); // scroll up → show
      } else {
        setShow(false); // scroll down → hide
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



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
      <nav className={`  bg-white sticky top-0 left-0 w-full z-50 transition-transform duration-300 ${show ?  "border-b border-white": "border-b border-gray-200"} ` } style={{
          transform: show ? "translateY(0)" : "translateY(-100%)", border : show ? "" : "",
        }}>
        <Container>
          <div className=" flex items-center justify-between mt-8.25 py-2">
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
                <CiUser  className=" text-[24px]"/> <span>Login</span>
              </button>
              <button  id="wishlist-icon" className="text-[16px] font-normal flex gap-0.75 items-center cursor-pointer">
                {" "}
                <CiHeart className=" text-[24px]" /> <span>Wishlist</span>
              </button>
              <button  id="cart-icon" className="text-[16px] font-normal flex gap-0.75 items-center cursor-pointer">
                {" "}
                <img src={union} alt="Cart" /> <span>my Cart</span>
              </button>
            </div>
          </div>
          
          </Container>
      </nav>

      <header className="border-b bg-white sticky top-0 left-0 z-45 border-gray-200">
        <Container>
          <div className="">
            <div className="pb-2.5 sticky top-0 left-0 w-full py-5 bg-white">
            <ul className=" flex justify-between relative ">
              {
                categories?.map((item)=>(
                <>
                  <li className="text-[16px] text-[#333333] relative uppercase font-medium cursor-pointer hover:text-[#0970CD] duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-0.5 after:w-0 after:bg-[#0970CD] after:duration-500 hover:after:w-full group ">{item?.name}
             <div className="">
               { item?.subcategories && <div className=" hidden absolute top-full left-0 w-350  border border-gray-100 scale-z-110 bg-white px-17.75 pt-7.75 pb-6.5 group-hover:grid grid-cols-5 gap-15">
                 {
                  item?.subcategories?.map((item)=>(
                    <>
                  <div className="">
                    
                     <h2 className=' font-poppins text-[16px] text-[#3D3D3F] font-medium'>{item?.name}</h2>
                    <ul >
                      {
                        item?.items?.map((item)=>(

                          <li className="text-[#757575] hover:text-[#0970CD] duration-200 font-normal font-poppins text-[14px] mt-1">{item}</li>
                        ))
                      }
                    </ul>
                  </div>
                 

                    </> 
                  ))
                 }
                </div>}
             </div>
            </li>
              </>
                ))
              }
            </ul>
          </div>
          </div>
        </Container>
      </header>
      </>
  );
};
