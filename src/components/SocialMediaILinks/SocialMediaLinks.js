import React from 'react'
import { Imdb } from 'styled-icons/fa-brands/Imdb'
import { FacebookSquare } from 'styled-icons/fa-brands/FacebookSquare'
import { Twitter } from 'styled-icons/fa-brands/Twitter'
import { Instagram } from 'styled-icons/fa-brands/Instagram'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const FacebookIcon = styled(FacebookSquare)`
  width: 30px;
  color: black;
`

const ImdbIcon = styled(Imdb)`
  width: 30px;
  color: black;
`

const TwitterIcon = styled(Twitter)`
  width: 30px;
  color: black;
`

const InstagramIcon = styled(Instagram)`
  width: 30px;
  color: black;
`



const SocialMediaLinks = ({className, imdbId, facebookId, instagramId, twitterId}) => (
  <Container>
    {
      imdbId && 
      <a href={`https://www.imdb.com/title/${imdbId}`}>
        <ImdbIcon />
      </a>
    }
    {
      twitterId && 
      <a href={`https://www.twitter.com/${twitterId}`}>
        <TwitterIcon />
      </a>
    }
    {
      facebookId && 
      <a href={`https://www.facebook.com/${facebookId}`}>
        <FacebookIcon />
      </a>
    }
    {
      instagramId && 
      <a href={`https://www.instagram.com/${instagramId}`}>
        <InstagramIcon />
      </a>
    }
  </Container>  
)

export default SocialMediaLinks