import React from "react";
import { withRouter } from "next/router";
import AdminLayout from "../Layouts/AdminLayout";

const Products = (props) => {
  return (
    <div>
      <h1 className="text-gray-800">Products Page</h1>
      {/* <h1 className="text-gray-800">{router.pathname}</h1> */}
    </div>
  );
};

export default Products;
// export default withRouter(Products);
