import React from "react"
import { NavLink } from "react-router-dom"

const NavTabs = ({ className, tabs = [] }) =>
  tabs.map(tab => (
    <NavLink
      key={tab.label}
      exact
      to={`${tab.path}`}
      className={className}
      activeClassName="active"
    >
      {tab.label}
    </NavLink>
  ))

export default NavTabs
