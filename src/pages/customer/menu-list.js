import { ProductProvider } from "../../context/ProductContext";
import { useFirestore } from "../../hooks/useFirestore";

import { getLayout } from "../../components/customer/layouts/MenuListLayout";

import MenuList from "../../components/customer/MenuList";

const MenuListing = () => {
  const { docs } = useFirestore("menuItems");
  console.log(docs);
  return (
    <ProductProvider>
      <MenuList menuItems={docs} />
    </ProductProvider>
  );
};

MenuListing.getLayout = getLayout;

export default MenuListing;
