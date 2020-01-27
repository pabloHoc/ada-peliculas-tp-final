import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "utils/hooks/useAuth"
import PATHS from "constants/paths"

const PrivateRoute = ({ path, component, isAdminRoute = false, exact = false }) => {
  const { isAuthenticated, isAdmin } = useAuth()
  const authorized = isAuthenticated && (!isAdminRoute || (isAdminRoute && isAdmin))
  console.log(authorized)
  return authorized ? (
    <Route path={path} component={component} exact={exact} />
  ) : isAuthenticated ? (
    <Redirect to={PATHS.HOME} />
  ) : (
    <Redirect to={PATHS.SIGN_IN} />
  )
}

export default PrivateRoute
