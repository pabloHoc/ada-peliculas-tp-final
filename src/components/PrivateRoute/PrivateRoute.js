import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "utils/hooks/useAuth"
import PATHS from "constants/paths"

const PrivateRoute = ({ path, component, exact = false }) => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? (
    <Route path={path} component={component} exact={exact} />
  ) : (
    <Redirect to={PATHS.SIGN_IN} />
  )
}

export default PrivateRoute
