import { getLayout } from "../../../components/customer/layouts/MenuItemDetailsLayout";

import MenuItemDetails from "../../../components/customer/MenuItemDetails";
import { ProductProvider } from "../../../context/ProductContext";

const MenuItemPage = ({ menuItem }) => {
  console.log(menuItem);
  return (
    <ProductProvider>
      {/* <MenuItemDetails /> */}
      <>
        <div className="">
          <div className="grid justify-items-center mb-10">
            <p className="uppercase font-semibold leading-0 border-b-4 border-yellow-400 pb-2">
              Pizza - {menuItem}
            </p>
          </div>
        </div>
      </>
    </ProductProvider>
  );
};

MenuItemPage.getLayout = getLayout;

export default MenuItemPage;
