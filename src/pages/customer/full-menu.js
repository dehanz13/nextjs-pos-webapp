import CustomerLayout from "../../components/customer/layouts/CustomerSiteLayout"; // site layout
import { getLayout } from "../../components/customer/layouts/FullMenuLayout";

import MenuOverview from "../../components/customer/MenuOverview";
import { ProductProvider } from "../../context/ProductContext";
import pizzaPic from "../../../public/pizza2.jpg";

// This is the Full Menu Page
const CustomerLanding = () => {
  return (
    <ProductProvider>
      {/* <CustomerLayout> */}
      <MenuOverview />
      {/* </CustomerLayout> */}
    </ProductProvider>
  );
};

CustomerLanding.getLayout = getLayout;

export default CustomerLanding;
