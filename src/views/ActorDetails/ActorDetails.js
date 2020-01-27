import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useActor } from "apis/movieDb"

const ActorContainer = styled.div`
  display: flex;
`
const ActorPicture = styled.img``
const ActorInfo = styled.div``
const ActorName = styled.h1``
const ActorBiography = styled.p``

const ActorDetails = () => {
  const { id } = useParams()
  const actor = useActor(id)

  return (
    actor && (
      <ActorContainer>
        <ActorPicture
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${actor.profile_path}`}
        />
        <ActorInfo>
          <ActorName>{actor.name}</ActorName>
          <ActorBiography>{actor.biography}</ActorBiography>
        </ActorInfo>
      </ActorContainer>
    )
  )
}

export default ActorDetails
