import React from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../components/Layouts/AdminLayout.js";
import Products from "../../components/admin/Products";
import { ProductProvider } from "../../context/ProductContext";

export default function products() {
  return (
    <ProductProvider>
      <AdminLayout>
        <Products />
      </AdminLayout>
    </ProductProvider>
  );
}

// export default Products;
// export default withRouter(Products);
