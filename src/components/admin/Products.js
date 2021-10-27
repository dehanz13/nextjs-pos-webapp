import React from "react";
import { withRouter } from "next/router";
import AdminLayout from "../Layouts/AdminLayout";
import { menuData } from "./menuObject";
import ListUI from "../ListUI";
import TabsUI from "../TabsUI";

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl text-gray-700 mb-4">Menu</h1>
      {/* <TabsUI /> */}
      <section className="flex items-center w-full">
        <table class="shadow-lg bg-white flex-grow rounded-lg">
          <tr>
            <th class="bg-blue-100 border text-center px-8 py-4">#</th>
            <th class="bg-blue-100 border text-center px-8 py-4">Menu Item</th>
            <th class="bg-blue-100 border text-center px-8 py-4">
              Description
            </th>
            <th class="bg-blue-100 border text-center px-8 py-4">Price</th>
            <th class="bg-blue-100 border text-center px-8 py-4"></th>
          </tr>
          {menuData.map((data, key) => {
            return (
              <tr key={key}>
                <td class="border px-8 py-4 text-center capitalize">
                  {data.id}
                </td>
                <td class="border px-8 py-4 text-center capitalize">
                  {data.name}
                </td>
                <td class="border px-8 py-4 text-center capitalize">
                  {data.description}
                </td>
                <td class="border px-8 py-4 text-center">$ {data.price}</td>
                <td class="border px-2 py-4 text-center">
                  {/* <editButtons /> */}
                  <ul className="grid grid-cols-4 gap-2 place-items-center mx-4">
                    <li className="col-span-2">
                      <button>
                        <span className="h-8 w-8">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current text-gray-600"
                          >
                            <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                            <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="col-span-2">
                      <button>
                        <span className="h-8 w-8">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current text-red-500"
                          >
                            <path d="M3 3h18v18H3zM15 9l-6 6m0-6l6 6" />
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </div>
  );
};

export default Products;
// export default withRouter(Products);
