import React from "react";
import { withRouter } from "next/router";
import AdminSiteLayout from "../../components/admin/layouts/AdminSiteLayout";
import PieChart from "../../components/admin/Charts/PieChart";
import BarChart from "../../components/admin/Charts/BarChart";
import LineChart from "../../components/admin/Charts/LineChart";
import DoughnutChart from "../../components/admin/Charts/DoughnutChart";
import { Doughnut } from "react-chartjs-2";

export default function Analytics() {
  return (
    <AdminSiteLayout>
      <main>
        <section className="mt-4 p-3">
          <ul className="mt-3 grid grid-cols-3 gap-6">
            <li className="col-span-2 py-4 px-4 rounded border bg-gray-100 border-gray-200">
              <div className="grid grid-rows-3 gap-4 ">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex-1">
                    <span className="block mb-3 uppercase tracking-wider text-sm font-bold">
                      Sales (USD)
                    </span>
                    <span className="block mb-3 uppercase tracking-wider text-sm font-bold text-gray-600">
                      Last 7 days
                    </span>
                  </div>
                  <div className="items-center justify-center content-center">
                    <span className="p-3 flex items-center justify-center rounded-full bg-emerald-100">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-emerald-400"
                      >
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-gray-600">
                  <div className="flex items-center flex-wrap content-end">
                    <h1 className="font-extrabold text-4xl mr-2">$180.79</h1>
                    <span className="py-1 px-2 flex items-center justify-center rounded-full bg-emerald-100 font-extrabold">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-emerald-400"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                      <p className="text-xs text-emerald-400 ml-2">26.2%</p>
                    </span>
                  </div>
                  <div className="grid grid-rows-2 px-3 place-items-end">
                    <span className="block mb-3 uppercase tracking-wider text-sm font-bold text-gray-600">
                      Avg. Value
                    </span>
                    <div className="flex items-center flex-wrap content-end">
                      <span className="py-1 px-2 flex items-center justify-center rounded-full bg-emerald-100 font-extrabold">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current text-emerald-400"
                        >
                          <path d="M18 15l-6-6-6 6" />
                        </svg>
                        <p className="text-xs text-emerald-400 ml-2">7.42%</p>
                      </span>
                      <h1 className="font-extrabold text-xl ml-2">$24.19</h1>
                    </div>
                  </div>
                  <div className="grid grid-rows-2 px-3 place-items-end">
                    <span className="block mb-3 uppercase tracking-wider text-sm font-bold text-gray-600">
                      All Time
                    </span>
                    <div className="flex items-center flex-wrap content-end">
                      <span className="py-1 px-2 flex items-center justify-center rounded-full bg-emerald-100 font-extrabold">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current text-emerald-400"
                        >
                          <path d="M18 15l-6-6-6 6" />
                        </svg>
                        <p className="text-xs text-emerald-400 ml-2">5.2%</p>
                      </span>
                      <h1 className="font-extrabold text-xl ml-2">$2,523</h1>
                    </div>
                  </div>
                </div>

                <hr className="text-gray-800 border-1 my-2" />
                <LineChart />
              </div>
            </li>
            <li className="py-4 px-4 rounded border bg-gray-100 border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="flex-1">
                  <span className="block mb-3 uppercase tracking-wider text-sm font-bold">
                    Clients
                  </span>
                </div>
                <div className="items-center justify-center content-center">
                  <span className="p-3 flex items-center justify-center rounded-full bg-fuchsia-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-current text-fuchsia-400"
                    >
                      <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                      <path d="M15 7h6v6" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-600">
                {/* <div className="flex items-center flex-wrap content-end"> */}
                <div className="col-span-2">
                  <div className="grid grid-cols-3 gap-2 place-content-end h-full">
                    <div className="col-span-1">
                      <span className="flex items-center  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-current fill-current text-purple-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <p className="uppercase text-sm text-gray-600 ml-2">
                          New
                        </p>
                      </span>
                      <h3 className="text-gray-600 text-lg font-extrabold">
                        6
                      </h3>
                    </div>
                    <div className="col-span-2">
                      <span className="flex items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-current fill-current text-blue-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <p className="uppercase text-sm text-gray-600 ml-2">
                          Returning
                        </p>
                      </span>
                      <h3 className="text-gray-600 text-lg font-extrabold">
                        3
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-2 px-3 place-items-end">
                  <span className="block mb-3 uppercase tracking-wider text-sm font-bold text-gray-600">
                    All Time
                  </span>
                  <div className="flex items-center">
                    <h1 className="font-extrabold text-xl mr-2">27</h1>
                    <span className="py-1 px-2 flex items-center justify-center rounded-full bg-emerald-100 font-extrabold">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-emerald-400"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                      <p className="text-xs text-emerald-400 ml-2">1.8%</p>
                    </span>
                  </div>
                </div>
              </div>
              <hr className="text-gray-800 border-1 my-5" />
              <PieChart />
            </li>
          </ul>
        </section>
        <section className="mt-4 p-3">
          <ul className="mt-3 grid grid-cols-3 gap-6">
            <li className="col-span-2 py-4 px-4 rounded border bg-gray-100 border-gray-200">
              <div className="grid grid-rows-3 gap-4 ">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex-1">
                    <span className="block mb-3 uppercase tracking-wider text-sm font-bold">
                      Sales (USD)
                    </span>
                    <span className="block mb-3 uppercase tracking-wider text-sm font-bold text-gray-600">
                      Last 7 days
                    </span>
                  </div>
                  <div className="items-center justify-center content-center">
                    <span className="p-3 flex items-center justify-center rounded-full bg-emerald-100">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-emerald-400"
                      >
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-gray-600">
                  <div className="flex items-center flex-wrap content-end">
                    <h1 className="font-extrabold text-4xl mr-2">$180.79</h1>
                    <span className="py-1 px-2 flex items-center justify-center rounded-full bg-emerald-100 font-extrabold">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-emerald-400"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                      <p className="text-xs text-emerald-400 ml-2">26.2%</p>
                    </span>
                  </div>
                  <div className="grid grid-rows-2 px-3 place-items-end">
                    <span className="block mb-3 uppercase tracking-wider text-sm font-bold text-gray-600">
                      Avg. Value
                    </span>
                    <div className="flex items-center flex-wrap content-end">
                      <span className="py-1 px-2 flex items-center justify-center rounded-full bg-emerald-100 font-extrabold">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current text-emerald-400"
                        >
                          <path d="M18 15l-6-6-6 6" />
                        </svg>
                        <p className="text-xs text-emerald-400 ml-2">7.42%</p>
                      </span>
                      <h1 className="font-extrabold text-xl ml-2">$24.19</h1>
                    </div>
                  </div>
                  <div className="grid grid-rows-2 px-3 place-items-end">
                    <span className="block mb-3 uppercase tracking-wider text-sm font-bold text-gray-600">
                      All Time
                    </span>
                    <div className="flex items-center flex-wrap content-end">
                      <span className="py-1 px-2 flex items-center justify-center rounded-full bg-emerald-100 font-extrabold">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current text-emerald-400"
                        >
                          <path d="M18 15l-6-6-6 6" />
                        </svg>
                        <p className="text-xs text-emerald-400 ml-2">5.2%</p>
                      </span>
                      <h1 className="font-extrabold text-xl ml-2">$2,523</h1>
                    </div>
                  </div>
                </div>

                <hr className="text-gray-800 border-1 my-2" />
                <BarChart />
              </div>
            </li>
            <li className="py-4 px-4 rounded border bg-gray-100 border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="flex-1">
                  <span className="block mb-3 uppercase tracking-wider text-sm font-bold">
                    Clients
                  </span>
                </div>
                <div className="items-center justify-center content-center">
                  <span className="p-3 flex items-center justify-center rounded-full bg-fuchsia-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-current text-fuchsia-400"
                    >
                      <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                      <path d="M15 7h6v6" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-600">
                {/* <div className="flex items-center flex-wrap content-end"> */}
                <div className="col-span-2">
                  <div className="grid grid-cols-3 gap-2 place-content-end h-full">
                    <div className="col-span-1">
                      <span className="flex items-center  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-current fill-current text-purple-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <p className="uppercase text-sm text-gray-600 ml-2">
                          New
                        </p>
                      </span>
                      <h3 className="text-gray-600 text-lg font-extrabold">
                        6
                      </h3>
                    </div>
                    <div className="col-span-2">
                      <span className="flex items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-current fill-current text-blue-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <p className="uppercase text-sm text-gray-600 ml-2">
                          Returning
                        </p>
                      </span>
                      <h3 className="text-gray-600 text-lg font-extrabold">
                        3
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-2 px-3 place-items-end">
                  <span className="block mb-3 uppercase tracking-wider text-sm font-bold text-gray-600">
                    All Time
                  </span>
                  <div className="flex items-center">
                    <h1 className="font-extrabold text-xl mr-2">27</h1>
                    <span className="py-1 px-2 flex items-center justify-center rounded-full bg-emerald-100 font-extrabold">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-emerald-400"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                      <p className="text-xs text-emerald-400 ml-2">1.8%</p>
                    </span>
                  </div>
                </div>
              </div>
              <hr className="text-gray-800 border-1 my-5" />
              <DoughnutChart />
            </li>
          </ul>
        </section>
      </main>
    </AdminSiteLayout>
  );
}

// export default Products;
// export default withRouter(Products);
