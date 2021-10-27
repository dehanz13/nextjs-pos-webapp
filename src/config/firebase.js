import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({});

export const firestoreApp = app.firestore();
