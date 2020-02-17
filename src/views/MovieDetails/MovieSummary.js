import React from "react"
import styled from "styled-components"
import SocialMediaLinks from "components/SocialMediaILinks/SocialMediaLinks"
import { useMovie, useExternalIds } from "apis/movieDb"

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const InfoContainer = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 0 30px;
`

const MoviePoster = styled.img`
  width: 250px;
`

const MovieTitle = styled.h1`
  margin-top: 0;
`

const StyledSocialMediaLinks = styled(SocialMediaLinks)`
  display: flex;
  align-items: center;
  margin-top: 50px;
`

const MovieSummary = ({ id }) => {
  const [movie] = useMovie(id)
  const [externalIds] = useExternalIds(id)

  return (
    movie && (
      <>
        <FlexContainer>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`Poster de ${movie.original_title}`}
          />
          <InfoContainer>
            <MovieTitle>{movie.original_title}</MovieTitle>
            <p>{movie.overview}</p>
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
  )
}

export default MovieSummary
