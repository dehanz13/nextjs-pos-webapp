import React, { useState } from "react";
import Link from "next/link";

export default function IndexNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                <i className="far fa-building text-2xl"></i> Smart POS
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href=""
                >
                  Products
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href=""
                >
                  Business Types
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href=""
                >
                  Why Smart?
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href=""
                >
                  Resources
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}
              <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-lg font-semibold uppercase px-5 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link href="/api/auth/login">
                    <a
                    // href="http://localhost:3000/api/auth/login"
                    // rel="noreferrer noopener"
                    // target="_blank"
                    >
                      <i className="fas fa-sign-in-alt text-xl"></i> Sign In
                    </a>
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
