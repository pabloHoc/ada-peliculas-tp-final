import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import useQuery from "utils/hooks/useQuery"
import MovieList from "components/MovieList/MovieList"
import { useHistory } from "react-router-dom"
import { Flex, Title } from "components/Common/Common"

const MoviesContainer = styled(Flex)`
  flex-basis: 80%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.gray[900]};
`

const StyledTitle = styled(Title)`
  margin: 10px 10px 20px;
`

// TODO: hacer un pager

const MovieResults = ({ className }) => {
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

  const sanitizeCategory = category =>
    category
      .split("_")
      .map(w => w[0].toUpperCase() + w.slice(1))
      .join(" ")

  return (
    <MoviesContainer className={className} flexDirection="column">
      <StyledTitle>{sanitizeCategory(category)}</StyledTitle>
      <MovieList movies={movies} />
      <button onClick={handleClick}>Cargar más</button>
    </MoviesContainer>
  )
}

export default MovieResults
