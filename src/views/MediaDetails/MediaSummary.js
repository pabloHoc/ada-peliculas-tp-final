import React from "react"
import styled from "styled-components"
import SocialMediaLinks from "components/SocialMediaILinks/SocialMediaLinks"

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

const StyledSocialMediaLinks = styled(SocialMediaLinks)`
  display: flex;
  align-items: center;
  margin-top: 50px;
`

const MediaSummary = ({ data, media, externalIds }) => {
  const {
    poster_path,
    name,
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
    release_date
  } = data
  const isTvShow = media === "tv"

  return (
    <>
      <FlexContainer>
        <MediaPoster
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={`Poster de ${name}`}
        />
        <InfoContainer>
          <MediaTitle>{name}</MediaTitle>
          <p>{overview}</p>
          {isTvShow ? (
            <>
              <p>{`Temporadas: ${number_of_seasons}`}</p>
              <p>{`Episodios:  ${number_of_episodes}`}</p>
              <p>{`Duración:   ${episode_run_time[0]} min.`}</p>
              <p>{`Géneros:    ${genres.map(genre => genre.name).join(", ")}`}</p>
              <p>
                {`Producción: ${production_companies
                  .map(company => company.name)
                  .join(", ")}`}
              </p>
            </>
          ) : (
            <>
              <p>{`Duración:     ${runtime} min.`}</p>
              <p>{`Géneros:      ${genres.map(genre => genre.name).join(", ")}`}</p>
              <p>{`Presupuesto:  ${budget}`}</p>
              <p>{`Recaudación:  ${revenue}`}</p>
              <p>{`Producción:   ${production_companies
                .map(company => company.name)
                .join(", ")}`}</p>
            </>
          )}
          {externalIds && (
            <StyledSocialMediaLinks
              imdbId={externalIds.imdb_id}
              facebookId={externalIds.facebook_id}
              instagramId={externalIds.instagram_id}
              twitterId={externalIds.twitter_id}
              website={homepage}
            />
          )}
        </InfoContainer>
      </FlexContainer>
    </>
  )
}

export default MediaSummary
