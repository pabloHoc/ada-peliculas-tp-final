import React from "react"
import { Link } from "react-router-dom"
import PATHS from "constants/paths"

import styled from "styled-components"
import { List, ListItem, Flex } from "components/Common/Common"
import { Home } from "styled-icons/feather/Home"
import { Video } from "styled-icons/feather/Video"
import { Tv } from "styled-icons/feather/Tv"

const HomeIcon = styled(Home)`
  width: 30px;
`

const MovieIcon = styled(Video)`
  width: 34px;
  margin-top: 4px;
`

const TvShowIcon = styled(Tv)`
  width: 30px;
`

const LinkContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LinkLabel = styled.p`
  margin: 0;
`

const Nav = ({ className }) => (
  <List className={className}>
    <ListItem>
      <Link to={PATHS.HOME}>
        {/* <LinkContainer> */}
        <HomeIcon />
        {/* <LinkLabel>Inicio</LinkLabel> */}
        {/* </LinkContainer> */}
      </Link>
    </ListItem>
    <ListItem>
      <Link to={PATHS.MOVIES}>
        {/* <LinkContainer> */}
        <MovieIcon />
        {/* <LinkLabel>Películas</LinkLabel> */}
        {/* </LinkContainer> */}
      </Link>
    </ListItem>
    <ListItem>
      <Link to={PATHS.TV_SHOWS}>
        {/* <LinkContainer> */}
        <TvShowIcon />
        {/* <LinkLabel>Series</LinkLabel> */}
        {/* </LinkContainer> */}
      </Link>
    </ListItem>
  </List>
)

export default Nav
