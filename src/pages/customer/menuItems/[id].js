import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { ProductProvider } from "../../../context/ProductContext";
import { getLayout } from "../../../components/customer/layouts/MenuItemDetailsLayout";
import { getMenuItemData, getAllData, getAllDataIds } from "../../../lib/items";

const SelectedMenuItem = ({ menuItemData }) => {
  return (
    <ProductProvider>
      <>
        <div className="">
          <div className="grid justify-items-center mb-10">
            <p className="uppercase font-semibold leading-0 border-b-4 border-yellow-400 pb-2">
              Pizza - {menuItemData.id}
            </p>
          </div>
        </div>
      </>
    </ProductProvider>
  );
};

SelectedMenuItem.getLayout = getLayout;

export default SelectedMenuItem;

export async function getStaticPaths() {
  const allIds = await getAllDataIds();

  const paths = allIds.map((item) => ({
    params: {
      id: item.id,
    },
  }));
  // console.log("PATHS: " + paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("PATHS: " + JSON.stringify(params.id));
  const data = await getMenuItemData(params.id);
  // console.log("PATHS: " + params.id);
  // data.map((item) => {

  // })
  return {
    props: {
      menuItemData: data,
    },
  };
}
