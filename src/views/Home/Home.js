import React from "react"
import MediaCategoryPreview from "components/MediaCategoryPreview/MediaCategoryPreview"

const Home = () => (
  <>
    <MediaCategoryPreview media="movie" category="popular" />
    <MediaCategoryPreview media="tv" category="popular" />
  </>
)

export default Home
