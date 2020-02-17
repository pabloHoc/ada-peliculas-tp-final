import { useEffect } from "react"
import {
  requestVerification,
  verificationError,
  requestSignIn,
  receiveSignIn,
  signInError,
  requestSignOut,
  receiveSignOut,
  signOutError
} from "state/actions"
import { signIn as signInUser } from "apis/movieDb"

const getStoredSession = () => JSON.parse(localStorage.getItem("session_id"))

const saveSession = (username, sessionId) =>
  localStorage.setItem(
    "session_id",
    JSON.stringify({
      username,
      sessionId
    })
  )

export const useMovieDbAuth = (state, dispatch) => {
  const verifyLogin = () => {
    dispatch(requestVerification())
    const session = getStoredSession()
    if (session) {
      dispatch(receiveSignIn(session.username, session.sessionId))
    } else {
      dispatch(verificationError())
    }
  }

  const signIn = async (username, password) => {
    try {
      dispatch(requestSignIn())
      const { success, session_id } = await signInUser(username, password)
      if (success) {
        saveSession(username, session_id)
        dispatch(receiveSignIn(username, session_id))
      }
    } catch (error) {
      dispatch(signInError())
    }
  }

  return {
    verifyLogin,
    signIn
  }
}
