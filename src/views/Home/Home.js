import React from "react"
import MediaCategoryPreview from "components/MediaCategoryPreview/MediaCategoryPreview"

const Home = () => (
  <>
    <MediaCategoryPreview media="movie" category="trending" />
    <MediaCategoryPreview media="tv" category="trending" />
  </>
)

export default Home
