import { ProductProvider } from "../../context/ProductContext";
import { useFirestore } from "../../hooks/useFirestore";

import CustomerLayout from "../../components/customer/layouts/CustomerSiteLayout";
import MenuListLayout from "../../components/customer/layouts/MenuListLayout";
import { getLayout } from "../../components/customer/layouts/MenuListLayout";

import MenuOverview from "../../components/customer/MenuOverview";
import MenuList from "../../components/customer/MenuList";

// const menuListing = () => {
//   const { docs } = useFirestore("menuItems");
//   return (
//     <ProductProvider>
//       <CustomerLayout>
//         <MenuList menuItems={docs} />
//       </CustomerLayout>
//     </ProductProvider>
//   );
// };

// export default menuListing;
const MenuListing = () => {
  const { docs } = useFirestore("menuItems");
  return (
    <ProductProvider>
      {/* <CustomerLayout> */}
      <MenuList menuItems={docs} />
      {/* </CustomerLayout> */}
    </ProductProvider>
  );
};

MenuListing.getLayout = getLayout;

// MenuListing.getLayout = (page) => (
//   <CustomerLayout>
//     <MenuListLayout>{page}</MenuListLayout>
//   </CustomerLayout>
// );

export default MenuListing;
