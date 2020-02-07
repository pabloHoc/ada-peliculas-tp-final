import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getCollectionById } from "apis/collections"
import MovieCard from "components/MovieCard/MovieCard"

const StyledMoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledMovieCard = styled(MovieCard)`
  width: 185px;
  margin: 10px;
`

const CollectionDetails = () => {
  const [{ name = null, movieIds, movies }, setCollection] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchCollection = async () => {
      const collection = await getCollectionById(id)
      setCollection(collection)
    }
    fetchCollection()
  }, [id])

  return (
    name && (
      <div>
        <h1>{name}</h1>
        <p>{movieIds.length || 0} movies</p>
        <StyledMoviesContainer>
          {movieIds.map(id => (
            <StyledMovieCard
              key={id}
              id={id}
              img={`https://image.tmdb.org/t/p/w185${movies[id].poster_path}`}
              title={movies[id].original_title}
            />
          ))}
        </StyledMoviesContainer>
      </div>
    )
  )
}

export default CollectionDetails
