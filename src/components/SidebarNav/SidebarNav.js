import React from "react"

import { useRouteMatch } from "react-router-dom"
import { useAuth } from "utils/hooks/useAuth"
import PATHS from "constants/paths"

import Nav from "components/Nav/Nav"
import { Flex, Aside } from "components/Common/Common"

import styled from "styled-components"

const StyledAside = styled(Aside)`
  width: 150px;
  background-color: ${({ theme }) => theme.colors.black};
  text-align: center;
`

const StyledNav = styled(Nav)`
  width: 100%;
`

const SidebarNav = () => {
  const { isAuthenticated } = useAuth()
  const isSignIn = useRouteMatch(PATHS.SIGN_IN)
  const isSignUp = useRouteMatch(PATHS.SIGN_UP)
  const isAuth = isSignIn || isSignUp

  return (
    !isAuth && (
      <StyledAside>
        <Flex flexDirection="column">
          <StyledNav isAuthenticated={isAuthenticated} />
        </Flex>
      </StyledAside>
    )
  )
}

export default SidebarNav
