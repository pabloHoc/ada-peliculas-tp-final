import React from "react"

import { useRouteMatch } from "react-router-dom"
import { useAuth } from "utils/hooks/useAuth"
import PATHS from "constants/paths"

import styled from "styled-components"

import SearchBar from "components/SearchBar/SearchBar"
import { Flex } from "components/Common/Common"
import { SignOut } from "styled-icons/octicons/SignOut"

const HeaderWrapper = styled.header`
  padding: 5px 20px;
`

const UserGreeting = styled.p`
  font-size: 20px;
  margin-right: 15px;
`

const SignOutIcon = styled(SignOut)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.gray[100]};
  cursor: pointer;
`

const Header = () => {
  const { isAuthenticated, signOutUser, user } = useAuth()
  const isSignIn = useRouteMatch(PATHS.SIGN_IN)
  const isSignUp = useRouteMatch(PATHS.SIGN_UP)
  const isAuth = isSignIn || isSignUp

  return (
    <HeaderWrapper>
      <Flex justifyContent="space-between" alignItems="center">
        {!isAuth && <SearchBar />}
        {isAuthenticated && (
          <Flex alignItems="center">
            <UserGreeting>Hola {user.firstname}</UserGreeting>
            <SignOutIcon onClick={signOutUser} />
          </Flex>
        )}
      </Flex>
    </HeaderWrapper>
  )
}

export default Header
