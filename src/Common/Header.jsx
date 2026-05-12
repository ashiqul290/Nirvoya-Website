import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import logo from "../assets/HeaderImg/logo.png";
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import union from "../assets/HeaderImg/Union.png";
export const Header = () => {
  const [show, setShow] = useState(true);
  const [showAll, setShowAll] = useState(false);

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
            "Cotton",
            "Silk",
            "Katan",
            "Muslin",
            "Jamdani",
            "Georgette",
            "Nokshi Kantha",
            "Linen",
            "Khadi",
            "Tangail Taat",
            "Monipuri",
            "Dhakai Jamdani",
          ],
        },
        {
          name: "Clothes",
          items: [
            "T-shirt",
            "Shorts",
            "Shirt",
            "Track suit",
            "Jeans",
            "Georgette",
            "Waistcoat",
            "Sweater",
            "Coats",
            "Suit",
            "Sweatshirt",
            "Uniform",
          ],
        },
        {
          name: "Cosmetic",
          items: [
            "Perfume",
            "Eye make-up",
            "Skin care",
            "Hair care",
            "Make-up",
            "Oral Care",
            "Body Care",
            "Sanitary pad",
            "Shower gels & creams",
            "Hair Removal Products",
            "Lipstick",
            "Suntan cream",
          ],
        },
        {
          name: "Sports & Outdoor",
          items: [
            "Sweatshirt",
            "T-shirt",
            "Sports Bra",
            "Leggings",
            "Tracksuit",
            "Running Shoes",
            "Sports Bag",
            "Sports Equipment",
            "Outdoor Shoes",
            "Snow Boot",
            "Outdoor Equipment",
            "Sports Accessories",
          ],
        },
        {
          name: "Personal Care",
          items: [
            "Perfume",
            "Sexual Health",
            "After Shave Products",
            "Razor blade",
          ],
        },
        {
          name: "Shoes",
          items: [
            "Heeled shoes",
            "sneakers",
            "Casual Shoes",
            "Babet",
            "Sandals",
            "Slippers",
          ],
        },
      ],
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
    {
      name: "Food & Grocery",
    },
    {
      name: "Food & Grocery",
    },
    {
      name: "Food & Grocery",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setItemsPerPage(8);
      } else if (window.innerWidth >= 1280) {
        setItemsPerPage(8);
      } else if (window.innerWidth >= 1024) {
        setItemsPerPage(8);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // visible categories
  const visibleCategories = categories.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  // next
  const handleNext = () => {
    if (currentIndex + itemsPerPage < categories.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  // prev
  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <>
      <nav
        className={`  bg-white sticky px-5 pb-2 xl:px-0 top-0 left-0 w-full z-50 transition-transform duration-300 ${show ? "border-b border-white" : "border-b border-gray-200"} `}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <Container>
          <div className=" flex items-center justify-between mt-8.25 py-2">
            <div className="">
              <img src={logo} alt="Logo" />
            </div>
            <div className=" hidden bg-gray-100 xl:w-194.5 md:w-120 lg:w-140 md:flex justify-between rounded-l-[10px] rounded-r-[10px]">
              <input
                type="text"
                className="w-full outline-none py-3.25 pl-5"
                placeholder="I'm looking for..."
              />
              <button className="w-16  flex justify-center items-center rounded-r-[10px] text-white bg-[#0970CD] text-[28px] cursor-pointer   ">
                <IoIosSearch />
              </button>
            </div>
            <div className=" flex items-center gap-3.75 lg:gap-5 xl:gap-10">
              <button className="text-[16px] font-normal flex gap-0.75 items-center cursor-pointer">
                {" "}
                <CiUser className=" text-[24px]" />{" "}
                <span className=" hidden lg:block">Login</span>
              </button>
              <button
                id="wishlist-icon"
                className="text-[16px] font-normal flex gap-0.75 items-center cursor-pointer"
              >
                {" "}
                <CiHeart className=" text-[24px]" />{" "}
                <span className=" hidden lg:block">Wishlist</span>
              </button>
              <button
                id="cart-icon"
                className="text-[16px] font-normal flex gap-0.75 items-center cursor-pointer"
              >
                {" "}
                <img src={union} alt="Cart" />{" "}
                <div className=" hidden lg:block">my Cart</div>
              </button>
            </div>
          </div>

          <div className=" md:hidden bg-gray-100 max-w-194.5  flex justify-between rounded-l-[10px] rounded-r-[10px]">
            <input
              type="text"
              className="w-full outline-none py-3.25 pl-5"
              placeholder="I'm looking for..."
            />
            <button className="w-16  flex justify-center items-center rounded-r-[10px] text-white bg-[#0970CD] text-[28px] cursor-pointer   ">
              <IoIosSearch />
            </button>
          </div>
        </Container>
      </nav>

      <header className="border-b px-5 md:px-0 bg-white sticky top-0 left-0 z-45 border-gray-200">
        <Container>
          <div className="">
            <div className="pb-2.5 sticky flex justify-between items-start top-0 left-0 w-full py-5 bg-white">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className=" text-[20px] text-gray-600  cursor-pointer"
              >
                
                <IoIosArrowBack />
              </button>
              <ul
                className="grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-2 relative"
              >
                {visibleCategories?.map((item, index) => (
                  <>
                    <li
                      key={index}
                      className=" text-[11px] sm:text-[14px] md:text-[16px] text-[#333333] relative uppercase font-medium cursor-pointer hover:text-[#020202] duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-0.5 after:w-0 after:bg-[#0970CD] after:duration-500 hover:after:w-full group "
                    >
                      {item?.name}
                      <div className="">
                        {item?.subcategories && (
                          <div className=" hidden absolute top-full left-0 w-350  border border-gray-100 scale-z-110 bg-white px-17.75 pt-7.75 pb-6.5 group-hover:grid grid-cols-5 gap-15">
                            {item?.subcategories?.map((item) => (
                              <>
                                <div className="">
                                  <h2 className=" font-poppins text-[16px] text-[#3D3D3F] font-medium">
                                    {item?.name}
                                  </h2>
                                  <ul>
                                    {item?.items?.map((item) => (
                                      <li className="text-[#757575] hover:text-[#0970CD] duration-200 font-normal font-poppins text-[14px] mt-1">
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  </>
                ))}
              </ul>
              <button
                onClick={handleNext}
                disabled={currentIndex + itemsPerPage >= categories.length}
                className=" text-[20px] text-gray-600  cursor-pointer"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
