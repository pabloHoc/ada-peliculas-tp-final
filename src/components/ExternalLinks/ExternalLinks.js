import React from "react"
import { Imdb } from "styled-icons/fa-brands/Imdb"
import { FacebookSquare } from "styled-icons/fa-brands/FacebookSquare"
import { Twitter } from "styled-icons/fa-brands/Twitter"
import { Instagram } from "styled-icons/fa-brands/Instagram"
import { Link } from "styled-icons/fa-solid/Link"
import styled, { css } from "styled-components"
import { Flex } from "components/Common/Common"

const BaseLinkIcon = css`
  width: 25px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 10px;
`

const FacebookIcon = styled(FacebookSquare)`
  ${BaseLinkIcon}
`

const ImdbIcon = styled(Imdb)`
  ${BaseLinkIcon}
`

const TwitterIcon = styled(Twitter)`
  ${BaseLinkIcon}
`

const InstagramIcon = styled(Instagram)`
  ${BaseLinkIcon}
`

const WebsiteIcon = styled(Link)`
  ${BaseLinkIcon}
`

const ExternalLinks = ({ className, linkIds }) => {
  const { imdb_id, facebook_id, instagram_id, twitter_id, homepage } = linkIds

  return (
    <Flex alignItems="center" className={className}>
      {imdb_id && (
        <a href={`https://www.imdb.com/title/${imdb_id}`}>
          <ImdbIcon />
        </a>
      )}
      {twitter_id && (
        <a href={`https://www.twitter.com/${twitter_id}`}>
          <TwitterIcon />
        </a>
      )}
      {facebook_id && (
        <a href={`https://www.facebook.com/${facebook_id}`}>
          <FacebookIcon />
        </a>
      )}
      {instagram_id && (
        <a href={`https://www.instagram.com/${instagram_id}`}>
          <InstagramIcon />
        </a>
      )}
      {homepage && (
        <a href={homepage}>
          <WebsiteIcon />
        </a>
      )}
    </Flex>
  )
}

export default ExternalLinks
