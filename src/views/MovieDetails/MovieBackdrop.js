import React from "react"

const MovieBackdrop = ({ src, title }) => (
  <img
    src={`https://image.tmdb.org/t/p/original${src}`}
    alt={`Portada de ${title}`}
    style={{ width: "100%" }}
  />
)

export default MovieBackdrop
