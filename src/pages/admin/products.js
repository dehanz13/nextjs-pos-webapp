import React from "react";
import { useRouter } from "next/router";
import AdminSiteLayout from "../../components/admin/layouts/AdminSiteLayout";
import Products from "../../components/admin/Products";
import { ProductProvider } from "../../context/ProductContext";

export default function products() {
  return (
    <ProductProvider>
      <AdminSiteLayout>
        <Products />
      </AdminSiteLayout>
    </ProductProvider>
  );
}

// export default Products;
// export default withRouter(Products);
