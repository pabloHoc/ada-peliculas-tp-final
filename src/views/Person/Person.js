import React from "react"
import { Route, useParams, useRouteMatch } from "react-router-dom"
import styled from "styled-components"

import { useMedia } from "utils/hooks/useMedia"

import MediaList from "components/MediaList/MediaList"
import Details from "./sections/Details"
import NavTabs from "components/NavTabs/NavTabs"
import { Column } from "components/Common/Common"

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 30px;
`

const Person = () => {
  const { personId } = useParams()
  const [personData] = useMedia(personId, "person")

  const [{ cast }] = useMedia(personId, "person", "combined_credits")
  const [externalIds] = useMedia(personId, "person", "external_ids")
  const { url } = useRouteMatch()

  const TABS = {
    INFORMACION: `${url}/info`,
    CREDITOS: `${url}/credits`
  }

  const tabs = Object.keys(TABS).map(tab => ({ label: tab, path: TABS[tab] }))

  return (
    <Column>
      <NavLinkContainer>
        <NavTabs tabs={tabs} />
      </NavLinkContainer>
      <Route exact path={`${url}/info`}>
        <Details data={personData} externalIds={externalIds} />
      </Route>
      <Route exact path={`${url}/credits`}>
        <MediaList items={cast} media="multi" />
      </Route>
    </Column>
  )
}

export default Person
