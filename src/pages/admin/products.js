import React from "react";
import { withRouter } from "next/router";
import AdminLayout from "../../components/Layouts/AdminLayout.js";
import Products from "../../components/admin/Products";

const editButtons = () => {
  return (
    <ul>
      <li className="flex items-center mr-3">
        <button>
          <span className="h-8 w-8 flex items-center justify-center">
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
      <li className="flex items-center mr-3">
        <button>
          <span className="h-8 w-8 flex items-center justify-center">
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
  );
};

export default function products() {
  return (
    <AdminLayout>
      <Products />
    </AdminLayout>
  );
}

// export default Products;
// export default withRouter(Products);
