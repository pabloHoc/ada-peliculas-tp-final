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

const MediaSummary = ({ poster, title, overview, externalIds }) => {
  return (
    <>
      <FlexContainer>
        <MediaPoster
          src={`https://image.tmdb.org/t/p/w342${poster}`}
          alt={`Poster de ${title}`}
        />
        <InfoContainer>
          <MediaTitle>{title}</MediaTitle>
          <p>{overview}</p>
          {externalIds && (
            <StyledSocialMediaLinks
              imdbId={externalIds.imdb_id}
              facebookId={externalIds.facebook_id}
              instagramId={externalIds.instagram_id}
              twitterId={externalIds.twitter_id}
            />
          )}
        </InfoContainer>
      </FlexContainer>
    </>
  )
}

export default MediaSummary
