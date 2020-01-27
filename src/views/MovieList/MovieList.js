import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import useQuery from "utils/hooks/useQuery"
import MovieCard from "components/MovieCard/MovieCard"
import { useHistory } from "react-router-dom"

const StyledMoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledMovieCard = styled(MovieCard)`
  width: 185px;
  margin: 10px;
`

// TODO: hacer un pager

const MovieList = () => {
  // TODO: Explicar este proceso paso a paso
  const { category = "now_playing", query, page: pageStr = 1 } = useQuery()
  const [movies, setMovies] = useState([])
  const history = useHistory()
  const page = Number(pageStr)

  // TODO: ADD debounce

  useEffect(() => {
    const getUrl = (isSearch, keyword, page) =>
      `https://api.themoviedb.org/3${
        isSearch ? `/search/movie?query=${keyword}&` : `/movie/${keyword}?`
      }page=${page}&api_key=6a93319b2d78795675b8bd9aa0965a95`

    const url = query ? getUrl(true, query, page) : getUrl(false, category, page)

    axios.get(url).then(response => {
      setMovies(prevMovies =>
        page === 1
          ? [...response.data.results]
          : [...prevMovies, ...response.data.results]
      )
    })
  }, [category, page, query])

  const handleClick = () => {
    const url = `${
      query ? `/?query=${query}` : `/movies?category=${category}`
    }&page=${page + 1}`
    history.push(url)
  }

  return (
    <>
      <StyledMoviesContainer>
        {movies.length &&
          movies.map(movie => (
            <StyledMovieCard
              key={movie.id}
              id={movie.id}
              img={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              title={movie.title}
            />
          ))}
      </StyledMoviesContainer>
      <button onClick={handleClick}>Cargar más</button>
    </>
  )
}

export default MovieList
