import React from "react"
import styled from "styled-components"
import { Flex } from "components/Common/Common"
import Card from "components/Card/Card"

const StyledCard = styled(Card)`
  width: calc(20%);
  padding: 0 4px;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    width: calc(25%);
  }

  @media (max-width: 1000px) {
    width: calc(33.33%);
  }

  @media (max-width: 650px) {
    width: calc(50%);
  }
`

const MediaList = ({ items = [], media, className }) => (
  <Flex>
    {items.map(item => (
      <StyledCard
        key={item.credit_id || item.id}
        id={item.id}
        img={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path ||
          item.profile_path}`}
        title={item.title || item.name}
        subtitle={item.character}
        media={media === "multi" ? item.media_type : media}
        className={className}
      />
    ))}
  </Flex>
)

export default MediaList
