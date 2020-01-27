import { useEffect } from "react"
import { firebaseApp } from "apis/firebase"
import { createUser, getUserByEmail } from "apis/users"
import {
  requestSignIn,
  receiveSignIn,
  signInError,
  requestSignOut,
  receiveSignOut,
  signOutError,
  requestSignUp,
  signUpError,
  receiveSignUp
} from "state/actions"

export const useFirebaseAuth = (state, dispatch) => {
  useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged(async userData => {
      if (userData) {
        const user = await getUserByEmail(userData.email)
        dispatch(receiveSignIn(user))
      } else {
        dispatch(receiveSignOut())
      }
    })
    return () => unsubscribe()
  }, [dispatch])

  const signInUser = async (email, password) => {
    try {
      dispatch(requestSignIn())
      const logged = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
      if (logged) {
        const user = await getUserByEmail(email)
        dispatch(receiveSignIn(user))
      }
    } catch (error) {
      dispatch(signInError())
    }
  }

  const signOutUser = () => {
    dispatch(requestSignOut())
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        dispatch(receiveSignOut())
      })
      .catch(error => {
        dispatch(signOutError())
      })
  }

  const signUpUser = async (firstname, lastname, email, password) => {
    try {
      dispatch(requestSignUp())
      await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      const user = await createUser({ firstname, lastname, email })
      dispatch(receiveSignUp(user.data()))
    } catch (error) {
      dispatch(signUpError())
    }
  }

  return {
    signInUser,
    signOutUser,
    signUpUser
  }
}
