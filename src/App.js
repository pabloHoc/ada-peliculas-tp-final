import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MovieList from "features/movies/views/MovieList/MovieList"
import MovieDetails from "features/movies/views/MovieDetails/MovieDetails"
import ActorDetails from "features/actors/views/ActorDetails/ActorDetails"
import Nav from "components/Nav/Nav"
import SearchBar from "components/SearchBar/SearchBar"

const App = () => (
  <Router>
    <Nav />
    <SearchBar />
    <Switch>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies" component={MovieList} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/actors/:id" component={ActorDetails} />
    </Switch>
  </Router>
)

export default App
