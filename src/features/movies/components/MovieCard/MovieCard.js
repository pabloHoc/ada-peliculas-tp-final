import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({className, id, img, title}) => (
  <Link to={`/movies/${id}`}>
    <div className={className}>
      <img src={img} alt={`${title} poster`} />
      <p>{title}</p>
    </div>
  </Link>
)

export default MovieCard