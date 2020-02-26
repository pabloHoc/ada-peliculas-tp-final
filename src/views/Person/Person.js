import React from "react"
import { Route, useParams, useRouteMatch } from "react-router-dom"
import styled from "styled-components"

import { useMedia } from "utils/hooks/useMedia"

import MediaList from "components/MediaList/MediaList"
import Details from "./sections/Details"
import NavTabs from "components/NavTabs/NavTabs"

const Container = styled.div`
  flex-grow: 1;
  padding: 40px;
`

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 30px;
`

const StyledNavTabs = styled(NavTabs)`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding-bottom: 10px;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  }
`

// TODO: add image page

const Person = () => {
  const { personId } = useParams()
  const [personData] = useMedia(personId, "person")

  const [{ cast }] = useMedia(personId, "person", "combined_credits")
  const [externalIds] = useMedia(personId, "person", "external_ids")
  const [images] = useMedia(personId, "person", "images")
  const { url } = useRouteMatch()

  const TABS = {
    INFORMACION: `${url}/info`,
    CREDITOS: `${url}/credits`,
    IMAGENES: `${url}/images`
  }

  const tabs = Object.keys(TABS).map(tab => ({ label: tab, path: TABS[tab] }))

  return (
    <Container>
      <NavLinkContainer>
        <StyledNavTabs tabs={tabs} />
      </NavLinkContainer>
      <Route exact path={`${url}/info`}>
        <Details data={personData} externalIds={externalIds} />
      </Route>
      <Route exact path={`${url}/credits`}>
        <MediaList items={cast} media="multi" />
      </Route>
      {/* <Route exact path={`${url}/pictures`}>
        <MediaVideos videos={videos?.results} />
      </Route> */}
    </Container>
  )
}

export default Person
