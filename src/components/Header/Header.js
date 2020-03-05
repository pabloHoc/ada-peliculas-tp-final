import React from "react"

import styled from "styled-components"

import Nav from "components/Nav/Nav"
import SearchBar from "components/SearchBar/SearchBar"
import { Flex } from "components/Common/Common"

const HeaderWrapper = styled.header`
  padding: 10px 20px;
`

const StyledNav = styled(Nav)`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  @media (max-width: 500px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background: black;
    width: 100%;
    justify-content: space-around;
    text-align: center;
    padding: 5px 0;
    z-index: 99;
  }
`

const Header = () => (
  <HeaderWrapper>
    <Flex alignItems="center">
      <StyledNav />
      <SearchBar />
    </Flex>
  </HeaderWrapper>
)

export default Header
