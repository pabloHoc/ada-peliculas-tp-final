import React from "react"
import { useRouteMatch } from "react-router-dom"
import { useAuth } from "utils/hooks/useAuth"
import styled from "styled-components"
import Nav from "components/Nav/Nav"
import SearchBar from "components/SearchBar/SearchBar"
import PATHS from "constants/paths"

const HeaderWrapper = styled.header``
const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: center;
`
const UserGreeting = styled.p``
const SignOutButton = styled.button``

const Header = () => {
  const { isAuthenticated, signOutUser, user } = useAuth()
  const isSignIn = useRouteMatch(PATHS.SIGN_IN)
  const isSignUp = useRouteMatch(PATHS.SIGN_UP)
  const isAuth = isSignIn || isSignUp

  return (
    <HeaderWrapper>
      <Flex justifyContent="space-between">
        <Nav isAuthenticated={isAuthenticated} />
        {isAuthenticated && (
          <Flex>
            <UserGreeting>Hi {user.firstname}</UserGreeting>
            <SignOutButton onClick={signOutUser}>Sign out</SignOutButton>
          </Flex>
        )}
      </Flex>
      {!isAuth && <SearchBar />}
    </HeaderWrapper>
  )
}

export default Header
