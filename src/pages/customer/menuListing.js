import { useState, useContext } from "react";
import Link from "next/link";

import { ProductProvider } from "../../context/ProductContext";
import { useFirestore } from "../../hooks/useFirestore";
import CustomerLayout from "../../components/Layouts/CustomerLayout";
import MenuOverview from "../../components/customer/MenuOverview";
import MenuList from "../../components/customer/MenuList";

const menuListing = () => {
  const { docs } = useFirestore("menuItems");
  return (
    <ProductProvider>
      <CustomerLayout>
        <MenuList menuItems={docs} />
      </CustomerLayout>
    </ProductProvider>
  );
};

export default menuListing;
