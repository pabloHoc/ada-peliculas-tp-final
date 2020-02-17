import {
  VERIFICATION_REQUESTED,
  VERIFICATION_FAILED,
  // SIGNUP_REQUESTED,
  // SIGNUP_SUCCEED,
  // SIGNUP_FAILED,
  SIGNIN_REQUESTED,
  SIGNIN_SUCCEED,
  SIGNIN_FAILED,
  SIGNOUT_REQUESTED,
  SIGNOUT_SUCCEED,
  SIGNOUT_FAILED
} from "./constants"

const defaultState = {
  isVerifying: false,
  isAuthenticating: false,
  isAuthenticated: false,
  isAuthError: false,
  username: "",
  sessionId: ""
}

export const initialState = {
  ...defaultState,
  isVerifying: true
}

export const reducer = (state = initialState, { type, payload }) => {
  console.log(type)
  switch (type) {
    case VERIFICATION_REQUESTED:
      return {
        ...defaultState,
        isVerifying: true
      }
    case VERIFICATION_FAILED:
      return {
        ...defaultState
      }
    // case SIGNUP_REQUESTED:
    //   return {
    //     ...state,
    //     isAuthenticating: true
    //   }
    // case SIGNUP_SUCCEED:
    //   return {
    //     ...state,
    //     isAuthenticating: false,
    //     isAuthenticated: true,
    //     user: action.user,
    //     isAdmin: isAdmin(action.user)
    //   }
    // case SIGNUP_FAILED:
    //   return {
    //     ...state,
    //     isAuthenticating: false,
    //     isAuthenticated: false,
    //     isAuthError: true
    //   }
    case SIGNIN_REQUESTED:
      return {
        ...defaultState,
        isAuthenticating: true
      }
    case SIGNIN_SUCCEED:
      return {
        isVerifying: false,
        isAuthenticating: false,
        isAuthenticated: true,
        username: payload.username,
        sessionId: payload.sessionId
      }
    case SIGNIN_FAILED:
      return {
        ...defaultState,
        isAuthError: true
      }

    case SIGNOUT_REQUESTED:
      return {
        ...state,
        isAuthenticating: true
      }
    case SIGNOUT_SUCCEED:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        username: {}
      }
    case SIGNOUT_FAILED:
      return {
        ...state,
        isAuthenticating: false,
        isAuthError: true
      }
    default:
      throw new Error()
  }
}
