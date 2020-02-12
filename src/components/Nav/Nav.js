import React from "react"
import { Link } from "react-router-dom"
import PATHS from "constants/paths"

import styled from "styled-components"
import { List, ListItem, Flex } from "components/Common/Common"
import { LocalPlay } from "styled-icons/material/LocalPlay"
import { CalendarAlt } from "styled-icons/fa-regular/CalendarAlt"
import { Star } from "styled-icons/fa-solid/Star"
import { Heart } from "styled-icons/fa-solid/Heart"
import { List as ListIcon } from "styled-icons/fa-solid/List"
// TODO: make NavLinks
// TODO: make Header including Nav with button and user name

const UpcomingIcon = styled(CalendarAlt)`
  width: 30px;
  margin: 10px 0;
`

const PopularIcon = styled(Heart)`
  width: 30px;
  margin: 10px 0;
`

const TopRatedIcon = styled(Star)`
  width: 30px;
  margin: 10px 0;
`

const NowPlayingIcon = styled(LocalPlay)`
  width: 30px;
  margin: 10px 0;
`

const CollectionsIcon = styled(ListIcon)`
  width: 30px;
  margin: 10px 0;
`

const LinkContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`

const LinkLabel = styled.p`
  margin: 0;
`

const Nav = ({ isAuthenticated, className }) => (
  <List className={className}>
    <ListItem>
      <Link to={PATHS.UPCOMING_MOVIES}>
        <LinkContainer>
          <UpcomingIcon />
          <LinkLabel>Upcoming</LinkLabel>
        </LinkContainer>
      </Link>
    </ListItem>
    <ListItem>
      <Link to={PATHS.POPULAR_MOVIES}>
        <LinkContainer>
          <PopularIcon />
          <LinkLabel>Popular</LinkLabel>
        </LinkContainer>
      </Link>
    </ListItem>
    <ListItem>
      <Link to={PATHS.TOP_RATED}>
        <LinkContainer>
          <TopRatedIcon />
          <LinkLabel>Top Rated</LinkLabel>
        </LinkContainer>
      </Link>
    </ListItem>
    <ListItem>
      <Link to={PATHS.NOW_PLAYING_MOVIES}>
        <LinkContainer>
          <NowPlayingIcon />
          <LinkLabel>Now Playing</LinkLabel>
        </LinkContainer>
      </Link>
    </ListItem>
    {isAuthenticated ? (
      <ListItem>
        <Link to={PATHS.COLLECTION_LIST}>
          <LinkContainer>
            <CollectionsIcon />
            <LinkLabel>Collections</LinkLabel>
          </LinkContainer>
        </Link>
      </ListItem>
    ) : (
      <>
        <ListItem>
          <Link to={PATHS.SIGN_IN}>Sign In</Link>
        </ListItem>
        <ListItem>
          <Link to={PATHS.SIGN_UP}>Sign Up</Link>
        </ListItem>
      </>
    )}
  </List>
)

export default Nav
