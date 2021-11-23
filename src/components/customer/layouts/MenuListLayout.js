import Link from "next/link";
import { useRouter } from "next/router";
import { getLayout as getSiteLayout } from "../../Layouts/CustomerLayout";

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname === href
            ? "text-gray-100 border-gray-800"
            : "text-gray-100 hover:text-yellow-400 border-transparent"
        } ${className} block text-base font-bold leading-6 sm:text-lg sm:leading-7 focus:outline-none focus:text-gray-900 whitespace-no-wrap`}
      >
        {children}
      </a>
    </Link>
  );
};

const MenuListLayout = ({ children }) => {
  return (
    <>
      {children}
      <div className="bottom-0 left-0 z-50 fixed w-screen px-10 py-4 bg-white">
        <div className="grid grid-cols-4 gap-3 ">
          <div className="col-span-2">
            <span className="rounded-xl px-2 py-2 bg-gray-700 flex items-center justify-center font-bold">
              {/* <p className="text-md text-gray-100">All items</p> */}
              <ActiveLink href="/customer/full-menu">All Items</ActiveLink>
            </span>
          </div>
          <div className="col-span-1">
            <span className="rounded-xl px-2 py-2 bg-gray-700 flex items-center justify-center font-bold">
              <p className="text-md text-gray-100">F</p>
            </span>
          </div>
          <div className="col-span-1">
            <span className="rounded-xl px-2 py-2 bg-gray-700 flex items-center justify-center font-bold">
              <p className="text-md text-gray-100">C</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<MenuListLayout>{page}</MenuListLayout>);

export default MenuListLayout;
