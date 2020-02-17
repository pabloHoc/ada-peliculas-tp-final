import React from "react"

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

const SidebarNav = () => (
  <StyledAside>
    <Flex flexDirection="column">
      <StyledNav />
    </Flex>
  </StyledAside>
)

export default SidebarNav
