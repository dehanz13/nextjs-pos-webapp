import { firestoreDb } from "../config/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export async function getAllItemsIds() {
  try {
    const querySnapshot = await getDocs(collection(firestoreDb, "menuItems"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      return {
        params: {
          // menuItemData: menuItem.replace(/\.md$/, ""),
          // menuItemId: JSON.stringify(doc.id),
          menuItemId: doc,
        },
      };
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getMenuItemData(id) {
  const docRef = doc(firestoreDb, "menuItems", id);
  const docSnap = await getDoc(docRef);
  try {
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      // Combine the data with the id
      return {
        id,
        ...docSnap.data(),
      };
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getData() {
  const snapshot = await firestoreDb.collection("menuItems").get();
  return snapshot.docs.map((doc) => doc.data());
}

export async function getAllData() {
  let menuItemData = [];
  const docSnap = await getDocs(collection(firestoreDb, "menuItems"));
  try {
    docSnap.forEach((doc) => {
      // menuItemData.push(doc.data());
      menuItemData.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.log(error);
  }
  return menuItemData;
}

export async function getAllDataIds() {
  let menuItemDataIds = [];
  const docSnap = await getDocs(collection(firestoreDb, "menuItems"));
  try {
    docSnap.forEach((doc) => {
      menuItemDataIds.push({ id: doc.id });
    });
  } catch (error) {
    console.log(error);
  }
  return menuItemDataIds;
}
