import React from "react"
import styled from "styled-components"
import ExternalLinks from "components/ExternalLinks/ExternalLinks"

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const InfoContainer = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 0 30px;
`

const PersonPicture = styled.img`
  width: 250px;
`

const PersonName = styled.h1`
  margin-top: 0;
`

const StyledExternalLinks = styled(ExternalLinks)`
  margin-top: 50px;
`

const Details = ({ data, externalIds }) => {
  const { profile_path, name, biography, homepage } = data
  const { imdb_id, facebook_id, instagram_id, twitter_id } = externalIds

  return (
    <FlexContainer>
      <PersonPicture
        src={`https://image.tmdb.org/t/p/w342${profile_path}`}
        alt={`Imagen de ${name}`}
      />
      <InfoContainer>
        <PersonName>{name}</PersonName>
        <p>{biography}</p>
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
