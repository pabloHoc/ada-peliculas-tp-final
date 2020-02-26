import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import ExternalLinks from "components/ExternalLinks/ExternalLinks"
import Rating from "components/Rating/Rating"

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const InfoContainer = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 0 30px;
`

const MediaPoster = styled.img`
  width: 250px;
`

const MediaTitle = styled.h1`
  margin-top: 0;
`

const StyledExternalLinks = styled(ExternalLinks)`
  margin-top: 50px;
`

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
})

const formatCurrency = value => currencyFormatter.format(value).slice(0, -3)

const Details = ({ data, media, externalIds }) => {
  const {
    poster_path,
    name,
    title,
    overview,
    genres = [],
    number_of_episodes,
    number_of_seasons,
    production_companies = [],
    homepage,
    runtime,
    episode_run_time = [],
    budget,
    revenue,
    vote_average,
    release_date
  } = data

  const { imdb_id, facebook_id, instagram_id, twitter_id } = externalIds

  const isTvShow = media === "tv"

  return (
    <FlexContainer>
      <MediaPoster
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={`Poster de ${name || title}`}
      />
      <InfoContainer>
        <MediaTitle>{title}</MediaTitle>
        <Rating score={vote_average / 2} />
        <p>{overview}</p>
        {isTvShow ? (
          <>
            <p>{`Temporadas: ${number_of_seasons}`}</p>
            <p>{`Episodios:  ${number_of_episodes}`}</p>
            <p>{`Duración:   ${episode_run_time[0]} min.`}</p>
            <p>
              Géneros:
              {genres.map(genre => (
                <Link to={`/${media}/${genre.name}/${genre.id}/page/1`}>
                  {genre.name}
                </Link>
              ))}
            </p>
            <p>
              {`Producción: ${production_companies
                .map(company => company.name)
                .join(", ")}`}
            </p>
          </>
        ) : (
          <>
            <p>{`Duración:     ${runtime} min.`}</p>
            <p>
              Géneros:
              {genres.map(genre => (
                <Link to={`/${media}/${genre.name}/${genre.id}/page/1`}>
                  {genre.name}
                </Link>
              ))}
            </p>
            <p>{`Presupuesto:  ${formatCurrency(budget)}`}</p>
            <p>{`Recaudación:  ${formatCurrency(revenue)}`}</p>
            <p>{`Producción:   ${production_companies
              .map(company => company.name)
              .join(", ")}`}</p>
          </>
        )}
        {externalIds && (
          <StyledExternalLinks
            linkIds={{
              imdb_id,
              facebook_id,
              instagram_id,
              twitter_id,
              homepage
            }}
          />
        )}
      </InfoContainer>
    </FlexContainer>
  )
}

export default Details
