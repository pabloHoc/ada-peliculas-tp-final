import React from "react"
import styled from "styled-components"
import { Flex } from "components/Common/Common"
import Card from "components/Card/Card"

const StyledCard = styled(Card)`
  width: calc(20% - 20px);
  margin: 10px;

  @media (max-width: 1200px) {
    width: calc(25% - 20px);
  }

  @media (max-width: 1000px) {
    width: calc(33.33% - 20px);
  }

  @media (max-width: 650px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 400px) {
    width: calc(100% - 20px);
  }
`

const MediaList = ({ items = [], media }) => (
  <Flex>
    {items.map(item => (
      <StyledCard
        key={item.id}
        id={item.id}
        img={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
        title={item.title || item.name}
        media={media === "multi" ? item.media_type : media}
      />
    ))}
  </Flex>
)

export default MediaList
