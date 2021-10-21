import React from "react";
import { withRouter } from "next/router";
import AdminLayout from "../../components/Layouts/AdminLayout.js";

export default function Products() {
  return (
    <AdminLayout>
      <h1 className="text-gray-800">Products Page</h1>
    </AdminLayout>
  );
}

// export default Products;
// export default withRouter(Products);
