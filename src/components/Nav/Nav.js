import React from "react"
// Routing
import { NavLink } from "react-router-dom"
import PATHS from "constants/paths"
// Styled
import styled, { css } from "styled-components"
// Components
import { List, ListItem } from "components/Common/Common"
import { Home } from "styled-icons/feather/Home"
import { Video } from "styled-icons/feather/Video"
import { Tv } from "styled-icons/feather/Tv"

const BaseIcon = css`
  color: ${({ theme }) => theme.colors.text};
`

const HomeIcon = styled(Home)`
  ${BaseIcon}
  width: 30px;
`

const MovieIcon = styled(Video)`
  ${BaseIcon}
  width: 34px;
  margin-top: 4px;
`

const TvShowIcon = styled(Tv)`
  ${BaseIcon}
  width: 30px;
`

const StyledNavLink = styled(NavLink)`
  &.active > * {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Nav = ({ className }) => (
  <List className={className}>
    <ListItem>
      <StyledNavLink exact to={PATHS.HOME} activeClassName="active">
        <HomeIcon />
      </StyledNavLink>
    </ListItem>
    <ListItem>
      <StyledNavLink exact to={PATHS.MOVIES} activeClassName="active">
        <MovieIcon />
      </StyledNavLink>
    </ListItem>
    <ListItem>
      <StyledNavLink exact to={PATHS.TV_SHOWS} activeClassName="active">
        <TvShowIcon />
      </StyledNavLink>
    </ListItem>
  </List>
)

export default Nav
