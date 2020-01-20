import React from "react"
import { Link } from "react-router-dom"

const ActorCard = ({ className, id, img, name, character }) => (
  <Link to={`/actors/${id}`}>
    <div className={className}>
      <img src={img} alt={`${name} poster`} />
      <h2>{name}</h2>
      <p>{character}</p>
    </div>
  </Link>
)

export default ActorCard
