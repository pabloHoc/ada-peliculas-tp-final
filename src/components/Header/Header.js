import React from "react"

import styled from "styled-components"

import SearchBar from "components/SearchBar/SearchBar"
import { Flex } from "components/Common/Common"

const HeaderWrapper = styled.header`
  padding: 5px 20px;
`

const Header = () => (
  <HeaderWrapper>
    <Flex justifyContent="space-between" alignItems="center">
      <SearchBar />
    </Flex>
  </HeaderWrapper>
)

export default Header
