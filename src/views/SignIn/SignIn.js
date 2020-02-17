import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { useAuth } from "utils/hooks/useAuth"
import PATHS from "constants/paths"
import { authenticate } from "apis/movieDb"

import styled from "styled-components"

const Flex = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormControl = styled.div``
const FormLabel = styled.label``
const Input = styled.input``
const Button = styled.button``

const SignIn = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { isAuthenticated, isAuthenticating, signIn } = useAuth()

  const handleUsername = event => setUsername(event.target.value)
  const handlePassword = event => setPassword(event.target.value)

  const handleSignInUser = () => signIn(username, password)

  return isAuthenticated ? (
    <Redirect to={PATHS.HOME} />
  ) : (
    <Flex>
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
      </FormControl>
      <Button isLoading={isAuthenticating} onClick={handleSignInUser}>
        Login
      </Button>
    </Flex>
  )
}

export default SignIn
