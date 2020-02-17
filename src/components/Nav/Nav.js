import React from "react"
import { Link } from "react-router-dom"
import PATHS from "constants/paths"

import styled from "styled-components"
import { List, ListItem, Flex } from "components/Common/Common"
import { Home } from "styled-icons/feather/Home"
import { Video } from "styled-icons/feather/Video"
import { Tv } from "styled-icons/feather/Tv"

// TODO: make NavLinks
// TODO: make Header including Nav with button and user name

const HomeIcon = styled(Home)`
  width: 30px;
  margin: 10px 0;
`

const MovieIcon = styled(Video)`
  width: 30px;
  margin: 10px 0;
`

const TvShowIcon = styled(Tv)`
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

const Nav = ({ className }) => (
  <List className={className}>
    <ListItem>
      <Link to={PATHS.HOME}>
        <LinkContainer>
          <HomeIcon />
          <LinkLabel>Inicio</LinkLabel>
        </LinkContainer>
      </Link>
    </ListItem>
    <ListItem>
      <Link to={PATHS.POPULAR_MOVIES}>
        <LinkContainer>
          <MovieIcon />
          <LinkLabel>Películas</LinkLabel>
        </LinkContainer>
      </Link>
    </ListItem>
    <ListItem>
      <Link to={PATHS.POPULAR_TV_SHOWS}>
        <LinkContainer>
          <TvShowIcon />
          <LinkLabel>Series</LinkLabel>
        </LinkContainer>
      </Link>
    </ListItem>
  </List>
)

export default Nav
