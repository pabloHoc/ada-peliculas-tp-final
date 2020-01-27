import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "components/PrivateRoute/PrivateRoute"

import { AuthProvider } from "contexts/AuthContext"

import Header from "components/Header/Header"

import MovieList from "views/MovieList/MovieList"
import MovieDetails from "views/MovieDetails/MovieDetails"
import ActorDetails from "views/ActorDetails/ActorDetails"
import CollectionList from "views/CollectionList/CollectionList"
import CollectionDetails from "views/CollectionDetails/CollectionDetails"
import SignIn from "views/SignIn/SignIn"
import SignUp from "views/SignUp/SignUp"

import PATHS from "constants/paths"

const App = () => (
  <AuthProvider>
    <Router>
      <Header />
      <Switch>
        <Route exact path={PATHS.HOME} component={MovieList} />

        {/* Auth routes */}
        <Route path={PATHS.SIGN_IN} component={SignIn} />
        <Route path={PATHS.SIGN_UP} component={SignUp} />

        {/* Public routes */}
        <Route exact path={PATHS.MOVIE_LIST} component={MovieList} />
        <Route path={PATHS.MOVIE_DETAILS} component={MovieDetails} />
        <Route path={PATHS.ACTOR_DETAILS} component={ActorDetails} />

        {/* Private routes */}
        <PrivateRoute
          exact
          path={PATHS.COLLECTION_LIST}
          component={CollectionList}
        />
        <PrivateRoute
          path={PATHS.COLLECTION_DETAILS}
          component={CollectionDetails}
        />
      </Switch>
    </Router>
  </AuthProvider>
)

export default App
