import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import styled from "styled-components"

import Tabs from "components/Tabs/Tabs"
import MovieCard from "features/movies/components/MovieCard/MovieCard"
import MovieBackdrop from "./MovieBackdrop"
import MovieSummary from "./MovieSummary"
import MovieVideos from "./MovieVideos"

const StyledMoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const StyledMovieCard = styled(MovieCard)`
  width: 185px;
  margin: 10px;
`

// TODO: Pasar todos fetch a MovieDetails

const MovieDetails = () => {
  const [similarMovies, setSimilarMovies] = useState([])
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
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

  return (
    <div>
      <MovieBackdrop id={id} />
      <Tabs>
        <Tabs.Panel label="Información">
          <MovieSummary id={id} />
        </Tabs.Panel>
        <Tabs.Panel label="Videos">
          <MovieVideos videos={videos} />
        </Tabs.Panel>
        <Tabs.Panel label="Similares">
          <StyledMoviesContainer>
            {similarMovies.length &&
              similarMovies.map(movie => (
                <StyledMovieCard
                  key={movie.id}
                  id={movie.id}
                  img={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  title={movie.title}
                />
              ))}
          </StyledMoviesContainer>
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}

export default MovieDetails
