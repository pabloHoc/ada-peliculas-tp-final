import React from "react"
import CategoryPreview from "components/CategoryPreview/CategoryPreview"
import { Column } from "components/Common/Common"

const TvShows = () => (
  <Column>
    <CategoryPreview media="tv" category="popular" />
    <CategoryPreview media="tv" category="top_rated" />
    <CategoryPreview media="tv" category="on_the_air" />
  </Column>
)

export default TvShows
