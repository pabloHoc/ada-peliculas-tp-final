import * as firebase from "firebase"

import {
  db,
  createDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  searchDocs,
  findDoc,
  addItem,
  searchByItemInList
} from "./firebase"

const collections = db.collection("collections")

export const createCollection = ({ name }) =>
  createDoc(collections, { name, movies: [] })

export const getCollections = () => getDocs(collections)

export const getCollectionById = collectionId => getDoc(collections, collectionId)

export const getCollectionByName = name => searchDocs(collections, { name })

export const updateCollectionName = (collectionId, name) =>
  updateDoc(collections, collectionId, { name })

export const deleteCollection = collectionId => deleteDoc(collections, collectionId)

export const addMovie = (collectionId, { id: movieId, ...movieData }) =>
  updateDoc(collections, collectionId, {
    [`movies.${movieId}`]: movieData,
    movieIds: firebase.firestore.FieldValue.arrayUnion(movieId)
  })

export const removeMovie = (collectionId, movieId) =>
  updateDoc(collections, collectionId, {
    [`movies.${movieId}`]: firebase.firestore.FieldValue.delete(),
    movieIds: firebase.firestore.FieldValue.arrayRemove(movieId)
  })

export const searchByMovieId = movieId =>
  searchByItemInList(collections, movieId, "movieIds")
