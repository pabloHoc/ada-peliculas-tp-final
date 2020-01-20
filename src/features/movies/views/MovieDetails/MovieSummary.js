import React from "react"
import styled from "styled-components"
import ActorCard from "features/actors/components/ActorCard/ActorCard"
import SocialMediaLinks from "features/movies/components/SocialMediaILinks/SocialMediaLinks"
import Slider from "components/Slider/Slider"
import { useMovie, useCast, useExternalIds } from "services/api/movieDb"

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const InfoContainer = styled.div`
  flex: 1;
`

const MovieSummary = ({ id }) => {
  const movie = useMovie(id)
  const cast = useCast(id)
  const externalIds = useExternalIds(id)

  return (
    movie && (
      <>
        <h1>{movie.original_title}</h1>
        <FlexContainer>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`Poster de ${movie.original_title}`}
          />
          <InfoContainer>
            <p>{movie.overview}</p>
            {externalIds && (
              <SocialMediaLinks
                imdbId={externalIds.imdb_id}
                facebookId={externalIds.facebook_id}
                instagramId={externalIds.instagram_id}
                twitterId={externalIds.twitter_id}
              />
            )}
          </InfoContainer>
        </FlexContainer>
        {cast && (
          <Slider>
            {cast.map(
              actor =>
                actor.profile_path && (
                  <ActorCard
                    key={actor.id}
                    id={actor.id}
                    img={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    name={actor.name}
                    character={actor.character}
                  />
                )
            )}
          </Slider>
        )}
      </>
    )
  )
}

export default MovieSummary
