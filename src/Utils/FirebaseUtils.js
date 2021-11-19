import { firestoreDb } from "../config/firebase";
import { doc, setDoc, deleteDoc, collection } from "firebase/firestore";

export const setMenuItem = async (menuDetails, id) => {
  try {
    if (id === "newID") {
      const newMenu = doc(collection(firestoreDb, "menuItems"));
      await setDoc(newMenu, menuDetails);
      console.log("Added");
    } else {
      await setDoc(doc(firestoreDb, "menuItems", id), menuDetails);
      console.log("Updated");
    }
  } catch (err) {
    console.log(menuDetails);
    console.log(err);
  }
};

export const deleteMenuItem = async (id) => {
  try {
    await deleteDoc(doc(firestoreDb, "menuItems", id));
    console.log("Delete");
  } catch (err) {
    console.log(err);
  }
};
