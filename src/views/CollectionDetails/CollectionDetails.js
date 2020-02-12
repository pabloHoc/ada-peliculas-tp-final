import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getCollectionById, updateCollectionName } from "apis/collections"
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
  const [name, setName] = useState("")
  const [movieIds, setMovieIds] = useState([])
  const [movies, setMovies] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchCollection = async () => {
      const { name, movieIds, movies } = await getCollectionById(id)
      setName(name)
      setMovies(movies)
      setMovieIds(movieIds)
    }
    fetchCollection()
  }, [id])

  const handleChange = event => setName(event.target.value)

  // TODO: refactor this

  const handleKeyPress = event => {
    if (event.charCode === 13) {
      updateCollectionName(id, name)
        .then(() => {
          setName(name)
          setIsEditing(false)
        })
        .catch(error => console.log(error))
    }
  }

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <h1 onClick={() => setIsEditing(true)}>{name}</h1>
      )}
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
}

export default CollectionDetails
