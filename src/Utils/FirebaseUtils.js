import { firestoreDb } from "../config/firebase";
import { doc, getDoc, setDoc, deleteDoc, collection } from "firebase/firestore";

export const getMenuItem = async (id) => {
  const docRef = doc(firestoreDb, "menuItems", id);
  const docSnap = await getDoc(docRef);
  try {
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
};

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
