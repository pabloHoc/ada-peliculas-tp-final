import {
  VERIFICATION_REQUESTED,
  SIGNUP_REQUESTED,
  SIGNUP_SUCCEED,
  SIGNUP_FAILED,
  SIGNIN_REQUESTED,
  SIGNIN_SUCCEED,
  SIGNIN_FAILED,
  SIGNOUT_REQUESTED,
  SIGNOUT_SUCCEED,
  SIGNOUT_FAILED,
} from "./constants"

export const initialState = {
  isVerifying: false,
  isAuthenticating: false,
  isAuthenticated: false,
  isAuthError: false,
  user: {},
  isAdmin: false
}

const isAdmin = user => user.role === 'admin'

export const reducer = (state = initialState, action) => {  
  console.log(action.type)
  switch (action.type) {
    case VERIFICATION_REQUESTED:
      return {
        ...state,
        isVerifying: true
      }
    case SIGNUP_REQUESTED:
      return {
        ...state,
        isAuthenticating: true
      }
    case SIGNUP_SUCCEED:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        user: action.user,
        isAdmin: isAdmin(action.user)
      }
    case SIGNUP_FAILED:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        isAuthError: true
      }
    case SIGNIN_REQUESTED:
      return {
        ...state,
        isAuthenticating: true
      }
    case SIGNIN_SUCCEED:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        user: action.user,
        isAdmin: isAdmin(action.user)
      }
    case SIGNIN_FAILED:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        isAuthError: true
      }    
    case SIGNOUT_REQUESTED:
      return {
        ...state,
        isAuthenticating: true
      };
    case SIGNOUT_SUCCEED:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        user: {},
        isAdmin: false
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