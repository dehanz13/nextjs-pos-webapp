import Link from "next/link";
import { useRouter } from "next/router";
import { useFirestore } from "../../hooks/useFirestore";
import MenuList from "./MenuList";

const ChevronRight = ({ size = 8, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-${size} w-${size}`}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname === href
            ? "text-gray-900 border-gray-800"
            : "text-gray-700 hover:text-gray-700 border-transparent"
        } ${className} block text-base font-bold leading-6 sm:text-lg sm:leading-7 focus:outline-none focus:text-gray-900 whitespace-no-wrap`}
      >
        {children}
      </a>
    </Link>
  );
};

const MenuOverview = () => {
  const { docs } = useFirestore("menuItems");
  return (
    <>
      <div className="mb-20">
        <div className="grid justify-items-center ">
          <p className="uppercase font-semibold leading-0 border-b-4 border-yellow-400 pb-2">
            Full Menu
          </p>
        </div>
        <div className="divide-y divide-gray-400">
          <div className="grid grid-cols-4 py-4 text-gray-700 ">
            <div className="col-span-3 flex justify-start items-center">
              <p className="text-base font-bold leading-6 sm:text-lg sm:leading-7">
                Pick Your Choice
              </p>
            </div>
            <div className="col-span-1 flex justify-between items-center">
              <span className="rounded-xl h-10 w-10 min-h-10 max-h-10 max-w-8 px-2 py-2 bg-yellow-400 flex items-center justify-center font-extrabold mr-2">
                <p className="text-md text-gray-700">5</p>
              </span>
              <span className="">
                <ChevronRight />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 py-4 text-gray-700 ">
            <div className="col-span-3 flex justify-start items-center">
              <p className="text-base font-bold leading-6 sm:text-lg sm:leading-7">
                Our Specials
              </p>
            </div>
            <div className="col-span-1 flex justify-between items-center">
              <span className="rounded-xl h-10 w-10 min-h-10 max-h-10 max-w-8 px-2 py-2 bg-yellow-400 flex items-center justify-center font-extrabold mr-2">
                <p className="text-md text-gray-700">7</p>
              </span>
              <span className="">
                <ChevronRight />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 py-4 text-gray-700 ">
            <div className="col-span-3 flex justify-start items-center">
              <p className="text-base font-bold leading-6 sm:text-lg sm:leading-7">
                Appetizers
              </p>
            </div>
            <div className="col-span-1 flex justify-between items-center">
              <span className="rounded-xl h-10 w-10 min-h-10 max-h-10 max-w-8 px-2 py-2 bg-yellow-400 flex items-center justify-center font-extrabold mr-2">
                <p className="text-md text-gray-700">4</p>
              </span>
              <span className="">
                <ChevronRight />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 py-4 text-gray-700 ">
            <div className="col-span-3 flex justify-start items-center">
              <ActiveLink href="/customer/menu-list">Entree</ActiveLink>
            </div>
            <div className="col-span-1 flex justify-between items-center">
              <span className="rounded-xl h-10 w-10 min-h-10 max-h-10 max-w-8 px-2 py-2 bg-yellow-400 flex items-center justify-center font-extrabold mr-2">
                <p className="text-md text-gray-700">12</p>
              </span>
              <span className="">
                <ChevronRight />
              </span>
            </div>
          </div>
          {/* <Link href={`/customer/menu-list`}>
            <div className="grid grid-cols-4 py-4 text-gray-700 ">
              <div className="col-span-3 flex justify-start items-center">
                <p className="text-base font-bold leading-6 sm:text-lg sm:leading-7">
                  Entree
                </p>
              </div>
              <div className="col-span-1 flex justify-between items-center">
                <span className="rounded-xl h-10 w-10 min-h-10 max-h-10 max-w-8 px-2 py-2 bg-yellow-400 flex items-center justify-center font-extrabold mr-2">
                  <p className="text-md text-gray-700">12</p>
                </span>
                <span className="">
                  <ChevronRight />
                </span>
              </div>
            </div>
          </Link> */}

          <div className="grid grid-cols-4 py-4 text-gray-700 ">
            <div className="col-span-3 flex justify-start items-center">
              <p className="text-base font-bold leading-6 sm:text-lg sm:leading-7">
                Sides
              </p>
            </div>
            <div className="col-span-1 flex justify-between items-center">
              <span className="rounded-xl h-10 w-10 min-h-10 max-h-10 max-w-8 px-2 py-2 bg-yellow-400 flex items-center justify-center font-extrabold mr-2">
                <p className="text-md text-gray-700">5</p>
              </span>
              <span className="">
                <ChevronRight />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 py-4 text-gray-700 ">
            <div className="col-span-3 flex justify-start items-center">
              <p className="text-base font-bold leading-6 sm:text-lg sm:leading-7">
                Desserts
              </p>
            </div>
            <div className="col-span-1 flex justify-between items-center">
              <span className="rounded-xl h-10 w-10 min-h-10 max-h-10 max-w-8 px-2 py-2 bg-yellow-400 flex items-center justify-center font-extrabold mr-2">
                <p className="text-md text-gray-700">3</p>
              </span>
              <span className="">
                <ChevronRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuOverview;
