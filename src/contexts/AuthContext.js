import React, { createContext, useReducer, useEffect } from "react"
import { reducer, initialState } from "state/reducer"
import { useFirebaseAuth } from "utils/hooks/useFirebaseAuth"

const AuthContext = createContext(initialState)

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useFirebaseAuth(state, dispatch)
  useEffect(() => console.log({ newState: state }), [state])

  return (
    <AuthContext.Provider value={{ ...state, ...actions }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
