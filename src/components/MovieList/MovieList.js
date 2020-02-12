import React from "react"
import styled from "styled-components"
import { Flex } from "components/Common/Common"
import MovieCard from "components/MovieCard/MovieCard"

const StyledMovieCard = styled(MovieCard)`
  width: calc(20% - 20px);
  margin: 10px;

  @media (max-width: 1200px) {
    width: calc(25% - 20px);
  }

  @media (max-width: 1000px) {
    width: calc(33.33% - 20px);
  }

  @media (max-width: 650px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 400px) {
    width: calc(100% - 20px);
  }
`

const MovieList = ({ movies = [] }) => (
  <Flex>
    {movies.map(movie => (
      <StyledMovieCard
        key={movie.id}
        id={movie.id}
        img={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        title={movie.title}
      />
    ))}
  </Flex>
)

export default MovieList
