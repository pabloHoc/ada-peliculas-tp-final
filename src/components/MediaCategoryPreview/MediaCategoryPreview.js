import React from "react"
import { useMediaSearch } from "utils/hooks/media"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Flex } from "components/Common/Common"
import MediaList from "components/MediaList/MediaList"

const MediaCategoryPreview = ({ className, media, category }) => {
  const [data] = useMediaSearch(media, category)

  return (
    <div className={className}>
      <Flex>
        <h2>{`${category} ${media}`}</h2>
        <Link to={`/${media}/${category}/page/1`}>Ver más</Link>
      </Flex>
      <MediaList media={media} items={data?.results.slice(0, 5)} />
    </div>
  )
}

export default MediaCategoryPreview
