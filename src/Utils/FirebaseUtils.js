import { firestoreApp } from '../config/firebase';

const db = firestoreApp.collection('menuItems');

export const addMenuItem = async (menuDetails) => {
  try {
    await db.doc().set(menuDetails);
    console.log('Added');
  } catch (err) {
    console.Long(err);
  }
};

export const updateMenuItem = () => {};

export const deleteMenuItem = async (id) => {
  try {
    await db.doc(id).delete();
    console.log('Delete');
  } catch (err) {
    console.log(err);
  }
};
