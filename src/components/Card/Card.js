import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Image, Title } from "components/Common/Common"
import { Image as ImageIcon } from "styled-icons/feather/Image"

const StyledImage = styled(Image)`
  position: absolute;
  transform: scale(0.9);
  transition: 0.3s, height 0s;
  visibility: "hidden";
  transition-delay: scale 0.2s, opacity 0.4s;
  opacity: 0;

  &.loaded {
    position: relative;
    visibility: "visible";
    height: auto;
    transform: scale(1);
    opacity: 1;
  }

  &.error {
    height: 0;
  }
`

const ImageWrapper = styled.div`
  overflow: hidden;
`

const CardWrapper = styled.div`
  position: relative;
  & h3 {
    margin-bottom: 5px;
    transition: 0.3s;
  }
  & h4 {
    margin-top: 0;
    transition: 0.3s;
  }
  &:hover h3,
  &:hover h4 {
    color: white;
  }
  &:hover img {
    transform: scale(1.05);
  }
`

const ImageDefault = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  padding-top: 150%;
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

const StyledTitle = styled(Title)`
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fonts.sizes.h4};
  }
`

const StyledSubTitle = styled(Title)`
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fonts.sizes.h4};
  }
`

const Card = ({ className, id, img, title, subtitle, media }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleOnLoad = () => {
    setIsLoaded(true)
  }

  const handleOnError = () => setIsError(true)

  return (
    <CardWrapper className={className}>
      <Link to={`/${media}/${id}/info`}>
        <ImageWrapper>
          <StyledImage
            src={img}
            alt={`${title} poster`}
            onLoad={handleOnLoad}
            onError={handleOnError}
            loaded={isLoaded}
            className={(isLoaded && "loaded") || (isError && "error")}
          />
        </ImageWrapper>
        {!isLoaded && (
          <ImageDefault>
            <ImageNotFoundIcon />
          </ImageDefault>
        )}
        <StyledTitle as="h3">{title}</StyledTitle>
        {subtitle && <StyledSubTitle as="h4">{subtitle}</StyledSubTitle>}
      </Link>
    </CardWrapper>
  )
}

export default Card
