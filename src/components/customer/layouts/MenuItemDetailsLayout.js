import Link from "next/link";
import { useRouter } from "next/router";
import { getLayout as getSiteLayout } from "./CustomerSiteLayout";

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname === `/customer/${href}`
            ? "text-gray-100 border-gray-800"
            : "text-gray-100 hover:text-gray-400 border-transparent"
        } ${className} block text-base font-bold leading-6 sm:text-lg sm:leading-7 focus:outline-none focus:text-gray-900 whitespace-no-wrap`}
      >
        {children}
      </a>
    </Link>
  );
};

const Plus = ({ size = 8, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-${size} w-${size} stroke-current text-gray-100 ml-2`}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Minus = ({ size = 8, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-${size} w-${size} stroke-current text-gray-100 ml-2`}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MenuItemDetailsLayout = ({ children }) => {
  return (
    <>
      {children}
      <div className="bottom-0 left-0 z-50 fixed w-screen px-10 py-4 bg-white">
        <div className="grid grid-cols-4 gap-3 ">
          <div className="col-span-2">
            <span className="rounded-xl px-2 py-2 bg-gray-800 flex items-center justify-center font-bold">
              <p className="text-md text-gray-100">Qty</p>
            </span>
          </div>
          <div className="col-span-2">
            <span className="rounded-xl px-2 py-2 bg-gray-800 flex items-center justify-center font-bold">
              <ActiveLink href="/customer/full-menu">Add to cart</ActiveLink>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<MenuItemDetailsLayout>{page}</MenuItemDetailsLayout>);

export default MenuItemDetailsLayout;
