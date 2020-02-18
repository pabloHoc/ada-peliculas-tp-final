import React from "react"
import MediaCategoryPreview from "components/MediaCategoryPreview/MediaCategoryPreview"

const Movies = () => (
  <>
    <MediaCategoryPreview media="movie" category="popular" />
    <MediaCategoryPreview media="movie" category="top_rated" />
    <MediaCategoryPreview media="movie" category="upcoming" />
    <MediaCategoryPreview media="movie" category="now_playing" />
  </>
)

export default Movies
