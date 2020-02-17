import React from "react"
import { Route, NavLink, useParams, useRouteMatch } from "react-router-dom"
import styled from "styled-components"

import { useMedia } from "utils/hooks/media"

import MediaList from "components/MediaList/MediaList"
import MediaBackdrop from "./MediaBackdrop"
import MediaSummary from "./MediaSummary"
import MediaVideos from "./MediaVideos"

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

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding-bottom: 10px;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  }
`

const MediaDetails = () => {
  const { media, mediaId } = useParams()
  const [mediaData = []] = useMedia(mediaId, media)
  const [similar = []] = useMedia(mediaId, media, "similar")
  const [videos = []] = useMedia(mediaId, media, "videos")
  const [externalIds = []] = useMedia(mediaId, media, "external_ids")
  const { url, path } = useRouteMatch()

  return (
    <>
      <MediaBackdrop src={mediaData?.backdrop_path} />
      <Container>
        <NavLinkContainer>
          <StyledNavLink exact to={url} activeClassName="active">
            INFORMACION
          </StyledNavLink>
          <StyledNavLink to={`${url}/videos`} activeClassName="active">
            VIDEOS
          </StyledNavLink>
          <StyledNavLink to={`${url}/similar`} activeClassName="active">
            SIMILARES
          </StyledNavLink>
        </NavLinkContainer>
        <Route exact path={`${path}/`}>
          <MediaSummary
            poster={mediaData?.poster_path}
            title={mediaData?.original_title}
            overview={mediaData?.overview}
            externalIds={externalIds}
          />
        </Route>
        <Route exact path={`${path}/videos`}>
          <MediaVideos videos={videos?.results} />
        </Route>
        <Route exact path={`${path}/similar`}>
          <MediaList movies={similar?.results} />
        </Route>
      </Container>
    </>
  )
}

export default MediaDetails
