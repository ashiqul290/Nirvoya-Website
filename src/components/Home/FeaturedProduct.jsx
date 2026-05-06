import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Container } from "../../Common/Container";
import { ProductCart } from "../../Common/ProductCart";
import productimg1 from "../../assets/FeaturedProduct/image (1).png";
import { IoIosArrowDown } from "react-icons/io";
export const FeaturedProduct = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  let products = [
    {
      id: 1,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },

    {
      id: 2,
      img: productimg1,
      title: "Women fashion dress set",
      price: "10500",
    },
    {
      id: 3,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },
    {
      id: 4,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },
    {
      id: 5,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },
    {
      id: 6,
      img: productimg1,
      title: "Women fashion dress set",
      price: "10500",
    },
    {
      id: 7,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },
    {
      id: 8,
      img: productimg1,
      title: "Women black dress and red hat collections",
      price: "10500",
    },
    {
      id: 8,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },
    {
      id: 10,
      img: productimg1,
      title: "Women fashion dress set",
      price: "10500",
    },
    {
      id: 11,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },
    {
      id: 12,
      img: productimg1,
      title: "Women black dress and red hat collections",
      price: "10500",
    },
    {
      id: 8,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },
    {
      id: 10,
      img: productimg1,
      title: "Women fashion dress set",
      price: "10500",
    },
    {
      id: 11,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },
    {
      id: 12,
      img: productimg1,
      title: "Women black dress and red hat collections",
      price: "10500",
    },
    {
      id: 8,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },
    {
      id: 10,
      img: productimg1,
      title: "Women fashion dress set",
      price: "10500",
    },
    {
      id: 11,
      img: productimg1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
    },
    {
      id: 12,
      img: productimg1,
      title: "Women black dress and red hat collections",
      price: "10500",
    },
  ];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <>
      <div className="mt-12.5">
        <Container>
          <div className=" pb-10">
            <div className="flex justify-between items-center mb-5">
              <h3 className=" text-[26px] font-poppins font-medium text-[#383838]">
                Featured Product
              </h3>
              <button className=" flex items-center gap-2 text-[16px] font-medium text-[#757575] font-poppins cursor-pointer">
                View more <FaArrowRight />{" "}
              </button>
            </div>

            <div className=" grid grid-cols-4 gap-6.5">
              {products.slice(0, visibleCount).map((item) => (
                <ProductCart key={item.id} item={item} />
              ))}
            </div>
            {visibleCount < products.length && (
              <div className="flex justify-center py-10">
                <button
                  onClick={handleLoadMore}
                  className="font-poppins font-semibold text-[16px] text-white px-6.5 py-2.5 bg-[#34ADED] flex gap-2 items-center cursor-pointer rounded-[10px]"
                >
                  Show more <IoIosArrowDown />
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};
