import React from "react"
import CategoryPreview from "components/CategoryPreview/CategoryPreview"
import { Column } from "components/Common/Common"

const Home = () => (
  <Column>
    <CategoryPreview media="movie" category="trending" />
    <CategoryPreview media="tv" category="trending" />
  </Column>
)

export default Home
