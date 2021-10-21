import React from "react";

const Navbar = () => {
  return (
    <nav className="top-0 z-50 w-full flex flex-wrap items-center justify-between px-6 py-3 bg-white shadow">
      <div className="">
        <h1 className="text-gray-800 text-xl font-bold">Smart POS</h1>
      </div>
      <header className="flex items-center px-3 h-16 ">
        <h1 className="text-2xl text-gray-800">Dashboard</h1>
        <button className="h-12 w-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="stroke-current text-gray-800"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </header>
      <section className="flex items-center space-x-4 ">
        <button
          className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          aria-label="Notifications"
        >
          <span className="inline-block w-10 h-10 rounded-full overflow-hidden">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current text-gray-800"
            >
              <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
            </svg>
          </span>
          <span class="absolute inset-0 object-right-top -mr-6">
            <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
              6
            </div>
          </span>
        </button>
        <span className="inline-block w-10 h-10 rounded-full overflow-hidden">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="stroke-current text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
            <circle cx="12" cy="10" r="3" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </span>
      </section>
    </nav>
  );
};

export default Navbar;
