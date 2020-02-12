import React, { useState, useEffect } from "react"
import axios from "axios"
import { Route, NavLink, useParams, useRouteMatch } from "react-router-dom"
import styled from "styled-components"

import MovieList from "components/MovieList/MovieList"
import MovieBackdrop from "./MovieBackdrop"
import MovieSummary from "./MovieSummary"
import MovieVideos from "./MovieVideos"
import MovieCollections from "./MovieCollections"

const Container = styled.div`
  flex-grow: 1;
  padding: 40px;
`

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 30px;
`

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding-bottom: 10px;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  }
`

// TODO: Pasar todos fetch a MovieDetails

const MovieDetails = () => {
  const [movie, setMovie] = useState(null)
  const [videos, setVideos] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const { id } = useParams()
  const { path, url } = useRouteMatch()

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6a93319b2d78795675b8bd9aa0965a95`
      )
      .then(response => setMovie(response.data))

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=6a93319b2d78795675b8bd9aa0965a95`
      )
      .then(response => setSimilarMovies(response.data.results))

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=6a93319b2d78795675b8bd9aa0965a95`
      )
      .then(response => setVideos(response.data.results))
  }, [id])

  if (!movie) return null

  return (
    <>
      <MovieBackdrop src={movie.backdrop_path} />
      <Container>
        <MovieCollections movieData={movie} />
        <NavLinkContainer>
          <StyledNavLink exact to={url} activeClassName="active">
            INFORMACION
          </StyledNavLink>
          <StyledNavLink to={`${url}/videos`} activeClassName="active">
            VIDEOS
          </StyledNavLink>
          <StyledNavLink to={`${url}/similar`} activeClassName="active">
            SIMILARES
          </StyledNavLink>
        </NavLinkContainer>
        <Route exact path={`${path}/`}>
          <MovieSummary id={id} />
        </Route>
        <Route exact path={`${path}/videos`}>
          <MovieVideos videos={videos} />
        </Route>
        <Route exact path={`${path}/similar`}>
          <MovieList movies={similarMovies} />
        </Route>
      </Container>
    </>
  )
}

export default MovieDetails
