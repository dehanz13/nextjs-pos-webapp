import Image from "next/image";
import Link from "next/link";

const ChevronRight = ({ size = 10, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={size}
    // height={size}
    viewBox="0 0 16 24"
    fill="none"
    // stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-${size} w-${size} stroke-current text-gray-700 p-1`}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const MenuItem = ({ item }) => {
  return (
    <div className="container w-80 mx-auto">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500">
        <Image
          src={item.Image}
          alt={item.Name}
          width={2000}
          height={1390}
          layout="responsive"
          quality={100}
          placeholder="empty"
          objectFit="cover"
          priority
        />
        <div className="text-center relative">
          <span className="absolute w-full transform translate-x-28 -translate-y-14 bg-yellow-400 rounded-xl hover:bg-yellow-300 transition-all duration-200 cursor-pointer">
            <ChevronRight />
          </span>
        </div>
      </div>
      <div className=" py-4">
        <div className="flex justify-between px-2">
          <div className="flex flex-col items-start">
            <h1 className="mb-1 text-2xl font-bold text-gray-700 hover:text-gray-900 cursor-pointer">
              {item.Name}
            </h1>
            <span className="text-sm text-gray-700 hover:text-gray-900">
              {item.Description}
            </span>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-xl font-medium">${item.Price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuList = ({ menuItems }) => {
  return (
    <>
      <div className="">
        <div className="grid justify-items-center mb-10">
          <p className="uppercase font-semibold leading-0 border-b-4 border-yellow-400 pb-2">
            Entrees
          </p>
        </div>
        <ul className="">
          {menuItems
            .sort((a, b) => a.createdAt - b.createdAt)
            .map((data, idx) => {
              return (
                <li key={idx}>
                  <MenuItem item={data} />
                </li>
              );
            })}
        </ul>
      </div>

      {/* <div className="bottom-0 z-50 static w-screen flex flex-wrap justify-center items-center px-10 pt-10 bg-blue-400">
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-2">
            <span className="rounded-xl px-2 py-2 bg-yellow-400 flex items-center justify-center font-bold">
              <p className="text-md text-gray-700">All items</p>
            </span>
          </div>
          <div className="col-span-1">
            <span className="rounded-xl px-2 py-2 bg-yellow-400 flex items-center justify-center font-bold">
              <p className="text-md text-gray-700">F</p>
            </span>
          </div>
          <div className="col-span-1">
            <span className="rounded-xl px-2 py-2 bg-yellow-400 flex items-center justify-center font-bold">
              <p className="text-md text-gray-700">C</p>
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default MenuList;
