import React, { useState } from "react"
import styled from "styled-components"
import { Flex, Title, Text, Image } from "components/Common/Common"
import { Image as ImageIcon } from "styled-icons/feather/Image"

const Container = styled.div``

const StyledImage = styled(Image)`
  transform: scale(0.9);
  transition: 0.3s;
  visibility: ${props => (props.loaded ? "visible" : "hidden")};
  transition-delay: 0.2s;
  opacity: 0;

  &.loaded {
    transform: scale(1);
    opacity: 1;
  }
`

const ImageWrapper = styled.div`
  overflow: hidden;
`

const EpisodeTitle = styled(Title)`
  font-weight: 400;
`

const EpisodeNumber = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 10px;
  font-weight: 400;
`

const ImageDefault = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  padding-top: 60%;
  position: relative;
`

const ImageNotFoundIcon = styled(ImageIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45px;
  color: ${({ theme }) => theme.colors.text};
`

const EpisodeCard = ({ className, img, title, overview, episodeNumber }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleOnLoad = () => {
    setIsLoaded(true)
  }

  return (
    <Container className={className}>
      <ImageWrapper>
        <StyledImage
          src={`https://image.tmdb.org/t/p/w400/${img}`}
          alt={`${title} poster`}
          onLoad={handleOnLoad}
          loaded={isLoaded}
          className={isLoaded && "loaded"}
        />
      </ImageWrapper>
      {!isLoaded && (
        <ImageDefault>
          <ImageNotFoundIcon />
        </ImageDefault>
      )}
      <Flex alignItems="baseline">
        <EpisodeNumber>
          EP{episodeNumber < 10 ? `0${episodeNumber}` : episodeNumber}
        </EpisodeNumber>
        <EpisodeTitle as="h4">{title}</EpisodeTitle>
      </Flex>
      <Text>
        {overview
          .split(". ")
          .slice(0, 2)
          .join(". ")
          .concat(".")}
      </Text>
    </Container>
  )
}

export default EpisodeCard
