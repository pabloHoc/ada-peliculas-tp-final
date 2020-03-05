import React, { useEffect } from "react"
import { Route, useParams, useRouteMatch, useHistory } from "react-router-dom"
import styled from "styled-components"

import { useMedia } from "utils/hooks/useMedia"

import MediaList from "components/MediaList/MediaList"
import Banner from "components/Banner/Banner"
import NavTabs from "components/NavTabs/NavTabs"
import Details from "./sections/Details"
import Videos from "./sections/Videos"
import Seasons from "./sections/Seasons"
import { Flex, Column } from "components/Common/Common"

const TABS = {
  INFO: "/info",
  EPISODIOS: "/seasons/1",
  REPARTO: "/cast",
  VIDEOS: "/videos",
  SIMILARES: "/similar"
}

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 20px 0 10px;
  flex-wrap: wrap;
`

const Media = () => {
  const { media, mediaId } = useParams()
  const { url } = useRouteMatch()
  const history = useHistory()

  const [{ title }] = useMedia(mediaId, media)
  const [data, isLoading, hasError] = useMedia(mediaId, media, "", "es-ES")
  const [similar] = useMedia(
    mediaId,
    media,
    media === "tv" ? "recommendations" : "similar"
  )

  const [videos] = useMedia(mediaId, media, "videos")
  const [externalIds] = useMedia(mediaId, media, "external_ids")
  const [credits] = useMedia(mediaId, media, "credits")

  useEffect(() => {
    if (hasError) {
      history.push("/not-found")
    }
  }, [hasError, history])

  const tabs = Object.keys(TABS)
    .filter(
      tab =>
        (media === "tv" && tab !== "VIDEOS") ||
        (media === "movie" && tab !== "EPISODIOS")
    )
    .map(tab => ({ label: tab, path: `${url}${TABS[tab]}` }))

  return (
    <Flex flexDirection="column" alignItems="center">
      <Banner src={data.backdrop_path} />
      <TabsWrapper>
        <NavTabs tabs={tabs} />
      </TabsWrapper>
      <Column>
        <Route exact path={`${url}/info`}>
          <Details
            data={{ ...data, title }}
            media={media}
            externalIds={externalIds}
          />
        </Route>
        <Route exact path={`${url}/seasons/:season`}>
          <Seasons tvShowId={mediaId} seasons={data.seasons} />
        </Route>
        <Route exact path={`${url}/videos`}>
          <Videos videos={videos.results} />
        </Route>
        <Route exact path={`${url}/cast`}>
          <MediaList items={credits.cast} media="person" />
        </Route>
        <Route exact path={`${url}/similar`}>
          <MediaList items={similar.results} media={media} />
        </Route>
      </Column>
    </Flex>
  )
}

export default Media
