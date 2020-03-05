import React from "react"
import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"
import { Link, Text } from "components/Common/Common"

const GenreLink = styled(Link)`
  margin: 5px;
`

const TvShowSummary = ({ data }) => {
  const {
    genres = [],
    number_of_episodes,
    number_of_seasons,
    production_companies = [],
    episode_run_time = []
  } = data

  return (
    <>
      <Text>{`Temporadas: ${number_of_seasons}`}</Text>
      <Text>{`Episodios:  ${number_of_episodes}`}</Text>
      <Text>{`Duración:   ${episode_run_time[0]} min.`}</Text>
      <Text>
        Géneros:
        {genres.map(genre => (
          <GenreLink
            key={genre.id}
            as={RouterLink}
            to={`/tv/${genre.name}/${genre.id}/page/1`}
          >
            {genre.name}
          </GenreLink>
        ))}
      </Text>
      <Text>
        {`Producción: ${production_companies
          .map(company => company.name)
          .join(", ")}`}
      </Text>
    </>
  )
}

export default TvShowSummary
