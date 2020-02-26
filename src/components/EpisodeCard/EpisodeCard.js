import React from "react"
import styled from "styled-components"
import { Flex } from "components/Common/Common"

const Container = styled.article``

const Image = styled.img`
  width: 100%;
`
const EpisodeNumber = styled.p``
const Title = styled.h3``
const Overview = styled.p``

const EpisodeCard = ({ className, img, title, overview, episodeNumber }) => (
  <Container className={className}>
    <Image src={`https://image.tmdb.org/t/p/w400/${img}`} alt={`${title} poster`} />
    <Flex>
      <EpisodeNumber>
        EP{episodeNumber < 10 ? `0${episodeNumber}` : episodeNumber}
      </EpisodeNumber>
      <Title>{title}</Title>
    </Flex>
    <Overview>{overview}</Overview>
  </Container>
)

export default EpisodeCard
