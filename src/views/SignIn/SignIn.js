import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { useAuth } from "utils/hooks/useAuth"
import PATHS from "constants/paths"

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
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { isAuthenticated, isAuthenticating, signInUser } = useAuth()

  const handleEmail = event => setEmail(event.target.value)
  const handlePassword = event => setPassword(event.target.value)

  return isAuthenticated ? (
    <Redirect to={PATHS.HOME} />
  ) : (
    <Flex>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input type="email" id="email" value={email} onChange={handleEmail} />
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
      <Button
        isLoading={isAuthenticating}
        onClick={() => signInUser(email, password)}
      >
        Login
      </Button>
    </Flex>
  )
}

export default SignIn
