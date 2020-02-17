import React from "react"
import styled from "styled-components"
import { useMediaSearch } from "utils/hooks/media"
import MediaList from "components/MediaList/MediaList"
import { useParams } from "react-router-dom"
import { Flex, Title } from "components/Common/Common"

const MediaItemsContainer = styled(Flex)`
  flex-basis: 80%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.gray[900]};
`

const StyledTitle = styled(Title)`
  margin: 10px 10px 20px;
`

// TODO: hacer un pager

const MediaResults = ({ className }) => {
  const { media, query, page = 1 } = useParams()
  const [data = []] = useMediaSearch(media, query, false, page)

  return (
    <MediaItemsContainer className={className} flexDirection="column">
      <StyledTitle>{query}</StyledTitle>
      <MediaList items={data?.results} media={media} />
    </MediaItemsContainer>
  )
}

export default MediaResults
