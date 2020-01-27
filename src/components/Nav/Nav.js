import React from "react"
import { Link } from "react-router-dom"
import PATHS from "constants/paths"
import styled from "styled-components"

const Flex = styled.nav`
  display: flex;
`

// TODO: make NavLinks
// TODO: make Header including Nav with button and user name

const Nav = ({ isAuthenticated }) => (
  <Flex>
    <Link to={PATHS.UPCOMING_MOVIES}>Upcoming</Link>
    <Link to={PATHS.POPULAR_MOVIES}>Popular</Link>
    <Link to={PATHS.TOP_RATED}>Top Rated</Link>
    <Link to={PATHS.NOW_PLAYING_MOVIES}>Now Playing</Link>
    {isAuthenticated ? (
      <Link to={PATHS.COLLECTION_LIST}>Collections</Link>
    ) : (
      <>
        <Link to={PATHS.SIGN_IN}>Sign In</Link>
        <Link to={PATHS.SIGN_UP}>Sign Up</Link>
      </>
    )}
  </Flex>
)

export default Nav
