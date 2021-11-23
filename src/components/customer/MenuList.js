import { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useFirestore } from "../../hooks/useFirestore";

const ChevronRight = ({ size = 20, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const MenuList = () => {
  const {
    name,
    setName,
    description,
    setDescription,
    category,
    setCategory,
    price,
    setPrice,
    quantity,
    setQuantity,
    updateData,
    setUpdateData,
    image,
    setImage,
    imageUrl,
    setImageUrl,
    imageTitle,
    setImageTitle,
  } = useContext(ProductContext);
  const { docs } = useFirestore("menuItems");
  return (
    <>
      <div class="container w-80 mx-auto  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500">
        <img class="w-full" src="https://i.imgur.com/iObhoAx.png" alt="" />
        <div class="text-center relative py-14">
          <span class="absolute transform -translate-x-10 -translate-y-24 z-50 text-green-500 bg-white rounded-full hover:text-green-400 transition-all duration-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-20 w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <h1 class="mb-1 text-2xl font-sans font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">
            Meditaciones en casa
          </h1>
          <span class="text-lg text-gray-700 hover:text-gray-900">
            Susan Paz
          </span>
        </div>
      </div>
      {/* <div className="max-w-md w-full lg:max-w-full lg:flex"> */}
      {/* <Image src={pizzaPic} alt="Pizza" /> */}
      {/* <div className="h-12 lg:h-auto lg:w-12 flex-none bg-cover rounded-3xl text-center overlow-hidden">
              
            </div> */}
      {/* </div> */}

      {/* <div className="divide-y divide-gray-200">
            <div className="py-8 space-y-4 text-gray-700 ">
              <p className="text-base leading-6 sm:text-lg sm:leading-7">
                Appetizer
              </p>
            </div>
          </div> */}
    </>
  );
};

export default MenuList;
