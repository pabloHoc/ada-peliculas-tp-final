import React, { createContext, useReducer, useEffect } from "react"
import { reducer, initialState } from "state/reducer"
import { useMovieDbAuth } from "utils/hooks/useMovieDbAuth"
const AuthContext = createContext(initialState)

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useMovieDbAuth(state, dispatch)

  useEffect(() => console.log({ newState: state }), [state])

  // TODO: DEPENDENCY ARRAY

  useEffect(() => {
    actions.verifyLogin()
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, ...actions }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
