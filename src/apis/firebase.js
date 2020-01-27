import * as firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAzgI1C6EXueikknJk-xr-XYytWe-iIl54",
  authDomain: "ada-tp-final.firebaseapp.com",
  databaseURL: "https://ada-tp-final.firebaseio.com",
  projectId: "ada-tp-final",
  storageBucket: "ada-tp-final.appspot.com",
  messagingSenderId: "753484993302",
  appId: "1:753484993302:web:5ae1d0b85ed483480a3637"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const createDoc = (collection, data) => 
  collection
  .add(data)
  .then(doc => ({id: doc.id, ...data}))
  .catch(error => error)

const updateDoc = (collection, id, data) =>
  collection
  .doc(id)
  .update(data)
  .then(doc => ({id: doc.id, ...doc.data()}))
  .catch(error => error)

const getDocs = collection => 
  collection
  .get()
  .then(result => result.docs.map(doc => 
    ({id: doc.id, ...doc.data()})
  ))
  .catch(error => error)

const getDoc = async (collection, id) =>
  collection
  .doc(id)
  .get()
  .then(doc => ({id: doc.id, ...doc.data()}))
  .catch(error => error)

const searchDocs = (collection, searchParams, unique = false) => {
  let query = collection

  for (const param in searchParams) {
    if (searchParams[param])
      query = query.where(param, "==", searchParams[param])
  }

  return query
    .get()
    .then(result => {
      if (!result.docs.length)
        return null
      
      return unique ? 
        {id: result.docs[0].id, ...result.docs[0].data()} :
        result.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    .catch(error => error)
}

const findDoc = (collection, searchParams) => searchDocs(collection, searchParams, true)

const deleteDoc = (collection, id) =>
  collection
  .doc(id)
  .delete()
  .then(() => true)
  .catch(error => error)


export {
  firebaseApp,
  db,
  createDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  searchDocs,
  findDoc  
}  