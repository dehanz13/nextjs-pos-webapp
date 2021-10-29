import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { firestoreDb } from "../config/firebase";

export const useFirestore = (col) => {
  const [docs, setDocs] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(firestoreDb, col), (snapshot) =>
        setDocs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    [col]
  );

  return { docs };
};
