import {
  VERIFICATION_REQUESTED,
  VERIFICATION_FAILED,
  SIGNIN_REQUESTED,
  SIGNIN_SUCCEED,
  SIGNIN_FAILED,
  SIGNOUT_REQUESTED,
  SIGNOUT_SUCCEED,
  SIGNOUT_FAILED
  // SIGNUP_REQUESTED,
  // SIGNUP_SUCCEED,
  // SIGNUP_FAILED,
} from "./constants"

export const requestVerification = () => ({ type: VERIFICATION_REQUESTED })
export const verificationError = () => ({ type: VERIFICATION_FAILED })

export const requestSignIn = () => ({ type: SIGNIN_REQUESTED })
export const receiveSignIn = (username, sessionId) => ({
  type: SIGNIN_SUCCEED,
  payload: {
    username,
    sessionId
  }
})
export const signInError = () => ({ type: SIGNIN_FAILED })

export const requestSignOut = () => ({ type: SIGNOUT_REQUESTED })
export const receiveSignOut = user => ({ type: SIGNOUT_SUCCEED, user })
export const signOutError = () => ({ type: SIGNOUT_FAILED })

// export const requestSignUp = () => ({ type: SIGNUP_REQUESTED })
// export const receiveSignUp = user => ({ type: SIGNUP_SUCCEED, user })
// export const signUpError = () => ({ type: SIGNUP_FAILED })
