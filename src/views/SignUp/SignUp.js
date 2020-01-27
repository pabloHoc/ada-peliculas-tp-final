import React, { useState, useContext } from "react"
import { Redirect } from "react-router-dom"
import { AuthContext } from "contexts/AuthContext"
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

const SignUp = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signUpUser, isAuthenticating, isAuthenticated } = useContext(AuthContext)

  const handleFirstname = event => setFirstname(event.target.value)
  const handleLastname = event => setLastname(event.target.value)
  const handleEmail = event => setEmail(event.target.value)
  const handlePassword = event => setPassword(event.target.value)

  return isAuthenticated ? (
    <Redirect to={PATHS.HOME_PATH} />
  ) : (
    <Flex>
      <FormControl>
        <FormLabel htmlFor="firstname">Firstname</FormLabel>
        <Input
          type="text"
          id="firstname"
          value={firstname}
          onChange={handleFirstname}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="lastname">Lastname</FormLabel>
        <Input
          type="text"
          id="lastname"
          value={lastname}
          onChange={handleLastname}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input type="email" id="email" value={email} onChange={handleEmail} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
      </FormControl>
      <Button
        onClick={() => signUpUser(firstname, lastname, email, password)}
        isLoading={isAuthenticating}
      >
        Register
      </Button>
    </Flex>
  )
}

export default SignUp
