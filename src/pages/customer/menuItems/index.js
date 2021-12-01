import { ProductProvider } from "../../../context/ProductContext";
import { getLayout } from "../../../components/customer/layouts/MenuListLayout";
import MenuList from "../../../components/customer/MenuList";
import {
  getAllItemsIds,
  getMenuItemData,
  getData,
  getAllData,
} from "../../../lib/items";
import { useFirestore } from "../../../hooks/useFirestore";
import { firestoreDb } from "../../../config/firebase";

const MenuItems = ({ items }) => {
  return (
    <ProductProvider>
      <MenuList menuItems={items} />
    </ProductProvider>
  );
};

MenuItems.getLayout = getLayout;

export default MenuItems;

export async function getStaticProps({ params }) {
  const data = await getAllData();
  // console.log("DATA: " + JSON.stringify(data));
  return {
    props: {
      items: data,
    },
  };
}
