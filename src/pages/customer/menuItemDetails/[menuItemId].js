import { useRouter } from "next/router";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

import { getAllItemsIds, getMenuItemData } from "../../../lib/items";
import { ProductProvider } from "../../../context/ProductContext";
import { useFirestore } from "../../../hooks/useFirestore";
import { firestoreDb } from "../../../config/firebase";
import { getMenuItem } from "../../../Utils/FirebaseUtils";
import { getLayout } from "../../../components/customer/layouts/MenuItemDetailsLayout";
// import MenuItemDetails from "../../../components/customer/MenuItemDetails";
import MenuItemPage from "./menuItemPage";

export default function SelectedMenuItem({ menuItemData }) {
  return (
    <ProductProvider>
      {/* <MenuItemPage menuItem={menuItemData} /> */}
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
}

SelectedMenuItem.getLayout = getLayout;

export async function getStaticPaths() {
  // const menuItemId = await getMenuItem()
  // const { docs } = useFirestore("menuItems");

  // const paths = docs.map((doc) => {
  //   const itemId = String(doc.id);
  //   return {
  //     params: { itemId },
  //   };
  // });

  // const data = await getAllItemsIds();
  // console.log(data);
  // const paths = data.map((item) => ({
  //   params: { id: JSON.stringify(item.id) },
  // }));
  let menuItems = [];
  try {
    const querySnapshot = await getDocs(collection(firestoreDb, "menuItems"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      let data = doc.data();
      menuItems.push({
        id: doc.id,
        // ...data,
      });
    });
  } catch (error) {
    console.log("Static Paths Error:" + error);
  }
  const paths = menuItems.map((item) => ({
    params: {
      menuItemId: item.id,
    },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const menuData = await getMenuItem(params.id);
  // let menuItemData = {};
  // console.log("ID: " + params.menuItemId);
  // const docRef = doc(firestoreDb, "menuItems", params.menuItemId);
  // const docSnap = await getDoc(docRef);
  // try {
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     // Combine the data with the id
  //     menuItemData = docSnap.data();
  //     return {
  //       // id,
  //       // ...docSnap.data(),
  //       props: {
  //         menuItemData,
  //       },
  //     };
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
  const menuItemData = await getMenuItemData(params.menuItemId);
  return {
    props: {
      menuItemData,
    },
  };
}

// export async function getServerSideProps({ itemId }) {
//   // const testId = JSON.parse(JSON.stringify(itemId));
//   const menuData = await getMenuItem(itemId);
//   // const selectedId = params.menuItemData.replace(/\-/g, "+");
//   // const docRef = doc(firestoreDb, "menuItems", itemId);
//   // const docSnap = await getDoc(docRef);
//   // if (docSnap.exists()) {
//   //   console.log("Document data:", docSnap.data());
//   // } else {
//   //   // doc.data() will be undefined in this case
//   //   console.log("No such document!");
//   // }
//   // const menuItem = docSnap.data();
//   // const { docs } = useFirestore("menuItems");
//   // const menuItemId = await
//   // const menuItemId = docs.map((item) => ({
//   //   id: item.id,
//   //   ...item.data(),
//   // }));
//   // const menuItem = await firestoreDb.collection("menuItems").get();
//   // const menuItemData = menuItem.docs.map((entry) => ({
//   //   id: entry.id,
//   //   ...entry.data(),
//   // }));
//   // const menuItem = docs.map((data) => {
//   //   if (data.id === menuItemData.id) {
//   //     return data;
//   //   }
//   // });
//   return {
//     props: {
//       // menuItem
//       // menuItem: menuItem,
//       menuItem: menuData,
//     },
//   };
// }
