import React from "react"

import styled from "styled-components"

import { useResponsive } from "utils/hooks/useResponsive"

import TvShowSummary from "./TvShowSummary"
import MovieSummary from "./MovieSummary"

import ExternalLinks from "components/ExternalLinks/ExternalLinks"
import Rating from "components/Rating/Rating"
import { Flex, Title, Text } from "components/Common/Common"

const InfoContainer = styled.div`
  flex: 1;
  max-width: 600px;
  width: 100%;
  padding: 0 30px;

  @media (max-width: 650px) {
    padding: 0;
    margin-top: 40px;
  }
`

const MediaPoster = styled.img`
  width: 250px;

  @media (max-width: 400px) {
    width: 100%;
  }
`

const StyledTitle = styled(Title)`
  margin-top: 0;
`

const StyledExternalLinks = styled(ExternalLinks)`
  margin-top: 50px;
`

const Overview = styled(Text)`
  margin-top: 20px;
`

const Details = ({ data, media, externalIds }) => {
  const breakpoint = useResponsive()
  const { poster_path, name, title, overview, homepage, vote_average } = data
  const { imdb_id, facebook_id, instagram_id, twitter_id } = externalIds
  const isTvShow = media === "tv"

  return (
    <Flex flexDirection={!["XS", "SM"].includes(breakpoint) ? " row" : "column"}>
      <MediaPoster
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={`Poster de ${name || title}`}
      />
      <InfoContainer>
        <StyledTitle as="h2">{name || title}</StyledTitle>
        <Rating score={vote_average / 2} />
        <Overview>{overview}</Overview>
        {isTvShow ? <TvShowSummary data={data} /> : <MovieSummary data={data} />}
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
    </Flex>
  )
}

export default Details
