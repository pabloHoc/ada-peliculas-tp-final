import React from "react"

import styled from "styled-components"

import Nav from "components/Nav/Nav"
import SearchBar from "components/SearchBar/SearchBar"
import { Flex } from "components/Common/Common"

const HeaderWrapper = styled.header`
  padding: 5px 20px;
`

const StyledNav = styled(Nav)`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`

const Header = () => (
  <HeaderWrapper>
    <Flex justifyContent="space-between" alignItems="center">
      <StyledNav />
      <SearchBar />
    </Flex>
  </HeaderWrapper>
)

export default Header
