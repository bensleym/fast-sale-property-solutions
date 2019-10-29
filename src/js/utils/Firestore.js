import { firestore } from "./../../firebase";

export const getFirestore = async collection => {
  const snapshot = await firestore.collection(collection).get();

  const dataOjb = snapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() };
  });

  return dataOjb;
};

const addFirestore = async (dataObj, collection) => {
  await firestore.collection(collection).add(dataObj);
};

export default addFirestore;
