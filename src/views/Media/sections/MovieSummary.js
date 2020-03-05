import React from "react"
import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"
import { Link, Text } from "components/Common/Common"

const GenreLink = styled(Link)`
  margin: 5px;
`

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
})

const formatCurrency = value => currencyFormatter.format(value).slice(0, -3)

const MovieSummary = ({ data }) => {
  const { genres = [], production_companies = [], runtime, budget, revenue } = data

  return (
    <>
      <Text>{`Duración:     ${runtime} min.`}</Text>
      <Text>
        Géneros:
        {genres.map(genre => (
          <GenreLink
            key={genre.id}
            as={RouterLink}
            to={`/movie/${genre.name}/${genre.id}/page/1`}
          >
            {genre.name}
          </GenreLink>
        ))}
      </Text>
      <Text>{`Presupuesto:  ${formatCurrency(budget)}`}</Text>
      <Text>{`Recaudación:  ${formatCurrency(revenue)}`}</Text>
      <Text>{`Producción:   ${production_companies
        .map(company => company.name)
        .join(", ")}`}</Text>
    </>
  )
}

export default MovieSummary
