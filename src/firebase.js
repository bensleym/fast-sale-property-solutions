import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCF9NnBP1cxNfZxaIjkVdQA6RBU0Bml-qo",
  authDomain: "fast-sale-property-solutions.firebaseapp.com",
  databaseURL: "https://fast-sale-property-solutions.firebaseio.com",
  projectId: "fast-sale-property-solutions",
  storageBucket: "fast-sale-property-solutions.appspot.com",
  messagingSenderId: "790974192753"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
