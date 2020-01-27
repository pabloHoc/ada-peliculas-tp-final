import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MovieBackdrop = ({id}) => {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=6a93319b2d78795675b8bd9aa0965a95`)
    .then(response => setMovie(response.data))
  }, [id])

  return (
    movie &&
    <img 
      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
      alt={`Portada de ${movie.original_title}`} 
      style={{width: '100%'}}
    />
  )
}

export default MovieBackdrop