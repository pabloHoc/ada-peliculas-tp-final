import { db } from './firebase'

const users = () => db.collection(`users`)

export const createUser = async ({firstname, lastname, email}) => {
  try {
    const user = await users().add({firstname, lastname, email, role: 'user'})
    return user.id
  } catch (error) {
    return error
  }
}

export const updateUser = async ({id, firstname, lastname, email}) => {
  try {
    const user = await users().doc(id).set({firstname, lastname, email})
    return user.id
  } catch (error) {
    return error
  }
}

export const getUsers = async () => {
  try {
    const querySnapshot = await users().get()
    return querySnapshot.docs.map(doc => 
      ({id: doc.id, ...doc.data()})
    )
  } catch(error) { 
    return error 
  }
}

export const getUserById = async uid => {
  try {
    const user = await users().doc(uid).get()
    if (user) {
      return user.data()
    } else {
      throw new Error("Doc doesn't exists")
    }
  } catch (error) {
    return error
  }
}

export const getUserByEmail = async email => {
  try {
    const user = await users().where('email', '==', email).get()
    if (user) {
      return { id: user.docs[0].id, ...user.docs[0].data()}
    } else {
      throw new Error("Doc doesn't exists")
    }
  } catch (error) {
    return error
  }
}

export const deleteUser = uid => {
  users()
  .doc(uid)
  .delete()
  .then(() => true)
  .catch(error => error)
}

