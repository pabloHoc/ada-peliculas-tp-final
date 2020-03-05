import React, { useState, useEffect } from "react"
// Hooks
import { useSearch } from "utils/hooks/useSearch"
import { useSearchTitle } from "utils/hooks/useSearchTitle"
import { useResponsive } from "utils/hooks/useResponsive"
// styled
import styled from "styled-components"
// Components
import { Link as RouterLink } from "react-router-dom"
import { ArrowRight } from "@styled-icons/feather/ArrowRight"
import { Container, Flex, Title, Link } from "components/Common/Common"
import MediaList from "components/MediaList/MediaList"

const StyledLink = styled(Link)`
  margin-left: 15px;
`

const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fonts.sizes.h3};
  }
`

const StyledArrowRight = styled(ArrowRight)`
  width: 20px;
  height: 20px;
  margin-left: 20px;
`

const StyledMediaList = styled(MediaList)`
  @media (max-width: 400px) {
    width: calc(100%);
  }
`

const CategoryPreview = ({ className, media, category }) => {
  const [{ results = [] }] = useSearch(media, category)
  const [items, setItems] = useState()
  const title = useSearchTitle(category, media)
  const breakpoint = useResponsive()

  useEffect(() => {
    const ITEMS = {
      XS: 1,
      SM: 2,
      MD: 3,
      LG: 4
    }
    setItems(ITEMS[breakpoint] || 5)
  }, [breakpoint])

  return (
    <Container className={className}>
      <StyledLink as={RouterLink} to={`/${media}/${category}/page/1`}>
        <Flex alignItems="center">
          <StyledTitle as="h2">{title}</StyledTitle>
          <StyledArrowRight />
        </Flex>
      </StyledLink>
      <StyledMediaList media={media} items={results.slice(0, items)} />
    </Container>
  )
}

export default CategoryPreview
