import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Image = styled.img`
  width: 100%;
`

const Card = ({ className, id, img, title, subtitle, media }) => (
  <Link to={`/${media}/${id}/info`} className={className}>
    <Image src={img} alt={`${title} poster`} />
    <p>{title}</p>
    {subtitle && <p>{subtitle}</p>}
  </Link>
)

export default Card
