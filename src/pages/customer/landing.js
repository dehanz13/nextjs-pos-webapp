import React from "react";

import CustomerLayout from "../../components/Layouts/CustomerLayout";
import MenuOverview from "../../components/customer/MenuOverview";
import { ProductProvider } from "../../context/ProductContext";
import pizzaPic from "../../../public/pizza2.jpg";

// This is the Full Menu Page
export default function CustomerLanding() {
  return (
    <ProductProvider>
      <CustomerLayout>
        <MenuOverview />
      </CustomerLayout>
    </ProductProvider>
  );
}
