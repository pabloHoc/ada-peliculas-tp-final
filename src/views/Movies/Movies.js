import React from "react"
import CategoryPreview from "components/CategoryPreview/CategoryPreview"
import { Column } from "components/Common/Common"

const Movies = () => (
  <Column>
    <CategoryPreview media="movie" category="popular" />
    <CategoryPreview media="movie" category="top_rated" />
    <CategoryPreview media="movie" category="upcoming" />
    <CategoryPreview media="movie" category="now_playing" />
  </Column>
)

export default Movies
