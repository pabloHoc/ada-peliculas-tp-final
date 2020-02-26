import React from "react"
import { useSearch } from "utils/hooks/useSearch"
import { useSearchTitle } from "utils/hooks/useSearchTitle"
import { Link } from "react-router-dom"
import { Flex } from "components/Common/Common"
import MediaList from "components/MediaList/MediaList"

const MediaCategoryPreview = ({ className, media, category }) => {
  const [{ results = [] }] = useSearch(media, category)
  const title = useSearchTitle(`${category} ${media}`)

  return (
    <div className={className}>
      <Flex>
        <h2>{title}</h2>
        <Link to={`/${media}/${category}/page/1`}>Ver más</Link>
      </Flex>
      <MediaList media={media} items={results.slice(0, 5)} />
    </div>
  )
}

export default MediaCategoryPreview
