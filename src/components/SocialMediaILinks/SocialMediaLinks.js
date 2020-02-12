import React from "react"
import { Imdb } from "styled-icons/fa-brands/Imdb"
import { FacebookSquare } from "styled-icons/fa-brands/FacebookSquare"
import { Twitter } from "styled-icons/fa-brands/Twitter"
import { Instagram } from "styled-icons/fa-brands/Instagram"
import styled from "styled-components"

const Container = styled.div``

const FacebookIcon = styled(FacebookSquare)`
  width: 25px;
  color: ${({ theme }) => theme.colors.gray[100]};
  margin-right: 10px;
`

const ImdbIcon = styled(Imdb)`
  width: 25px;
  color: ${({ theme }) => theme.colors.gray[100]};
  margin-right: 10px;
`

const TwitterIcon = styled(Twitter)`
  width: 25px;
  color: ${({ theme }) => theme.colors.gray[100]};
  margin-right: 10px;
`

const InstagramIcon = styled(Instagram)`
  width: 25px;
  color: ${({ theme }) => theme.colors.gray[100]};
  margin-right: 10px;
`

const SocialMediaLinks = ({
  className,
  imdbId,
  facebookId,
  instagramId,
  twitterId
}) => (
  <Container className={className}>
    {imdbId && (
      <a href={`https://www.imdb.com/title/${imdbId}`}>
        <ImdbIcon />
      </a>
    )}
    {twitterId && (
      <a href={`https://www.twitter.com/${twitterId}`}>
        <TwitterIcon />
      </a>
    )}
    {facebookId && (
      <a href={`https://www.facebook.com/${facebookId}`}>
        <FacebookIcon />
      </a>
    )}
    {instagramId && (
      <a href={`https://www.instagram.com/${instagramId}`}>
        <InstagramIcon />
      </a>
    )}
  </Container>
)

export default SocialMediaLinks
