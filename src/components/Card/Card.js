import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Image = styled.img`
  width: 100%;
`

const Card = ({ className, id, img, title, media }) => (
  <Link to={`/${media}/${id}`} className={className}>
    <Image src={img} alt={`${title} poster`} />
    <p>{title}</p>
  </Link>
)

export default Card
