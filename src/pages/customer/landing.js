import Image from "next/image";

import CustomerLayout from "../../components/Layouts/CustomerLayout";
import CustomerNavbar from "../../components/Navbars/CustomerNavbar";
import pizzaPic from "../../../public/pizza2.jpg";

const CustomerLanding = () => {
  return (
    <CustomerLayout>
      <div className="relative px-4 py-10 shadow-lg rounded-t-3xl sm:rounded-3xl sm:p-20 bg-white h-full">
        <div className="max-w-md mx-auto">
          <div className="block h-5 sm:h-6">
            <p className="uppercase font-semibold leading-0 ">Full Menu</p>
            <div className="pt-2 mb-4 w-1/4 border-b-2 border-yellow-400"></div>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 space-y-4 text-gray-700 ">
              <p className="text-base leading-6 sm:text-lg sm:leading-7">
                Appetizer
              </p>
            </div>
          </div>
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
        </div>
      </div>
    </CustomerLayout>
  );
};

export default CustomerLanding;
