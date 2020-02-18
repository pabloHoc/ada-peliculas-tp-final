import React from "react"
import MediaCategoryPreview from "components/MediaCategoryPreview/MediaCategoryPreview"

const TvShows = () => (
  <>
    <MediaCategoryPreview media="tv" category="popular" />
    <MediaCategoryPreview media="tv" category="top_rated" />
    <MediaCategoryPreview media="tv" category="on_the_air" />
  </>
)

export default TvShows
