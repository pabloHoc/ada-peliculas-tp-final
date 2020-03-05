import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.darkerText};
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding-bottom: 10px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &.active {
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 400px) {
    font-size: 14px;
    margin: 10px 5px;
  }
`

const NavTabs = ({ className, tabs = [] }) =>
  tabs.map(tab => (
    <StyledNavLink key={tab.label} exact to={`${tab.path}`} activeClassName="active">
      {tab.label}
    </StyledNavLink>
  ))

export default NavTabs
