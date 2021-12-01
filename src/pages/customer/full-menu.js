import { getLayout } from "../../components/customer/layouts/FullMenuLayout";

import MenuOverview from "../../components/customer/MenuOverview";
import { ProductProvider } from "../../context/ProductContext";

// This is the Full Menu Page
const CustomerLandingPage = () => {
  return (
    <ProductProvider>
      <MenuOverview />
    </ProductProvider>
  );
};

CustomerLandingPage.getLayout = getLayout;

export default CustomerLandingPage;
