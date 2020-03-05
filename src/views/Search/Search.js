import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory, useParams, useRouteMatch } from "react-router-dom"
import PATHS from "constants/paths"

import { useSearch } from "utils/hooks/useSearch"
import { useSearchTitle } from "utils/hooks/useSearchTitle"
import { useResponsive } from "utils/hooks/useResponsive"

import MediaList from "components/MediaList/MediaList"
import { Flex, Title, Column } from "components/Common/Common"
import Pagination, { PAGINATION_SIZES } from "components/Pagination/Pagination"

const MediaItemsContainer = styled(Flex)`
  flex-basis: 80%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 45px;
`

const StyledTitle = styled(Title)`
  margin: 0 0 30px;
`

const StyledPagination = styled(Pagination)`
  align-self: center;
`

const MAPPED_PAGINATION_SIZES = {
  XS: PAGINATION_SIZES.MINIMUN,
  SM: PAGINATION_SIZES.SMALL,
  MD: PAGINATION_SIZES.DEFAULT
}

const Search = ({ className }) => {
  const { media, query, searchParam, page = 1 } = useParams()
  const [nextPage, setNextPage] = useState(Number(page))
  const [{ results = [], total_pages }, isLoading] = useSearch(
    media,
    query,
    page,
    searchParam
  )
  const title = useSearchTitle(query, media)
  const history = useHistory()
  const isDetails = useRouteMatch(PATHS.DETAILS)
  const breakpoint = useResponsive()

  useEffect(() => {
    setNextPage(Number(page))
  }, [page])

  const handlePageChange = nextPage => {
    if (page !== nextPage) {
      const path = isDetails
        ? `/${media}/${query}`
        : `/${media}/${query}/${searchParam}`
      history.push(`${path}/page/${nextPage}`)
    }
  }

  return (
    <Column>
      <MediaItemsContainer className={className} flexDirection="column">
        <StyledTitle as={breakpoint !== "XS" ? "h2" : "h3"}>{title}</StyledTitle>
        {!isLoading && !results.length ? (
          <Title as="h2">No se han encontrado resultados</Title>
        ) : (
          <>
            <MediaList items={results} media={media} />
            {total_pages > 1 && (
              <StyledPagination
                current={nextPage}
                count={total_pages}
                onChange={handlePageChange}
                size={MAPPED_PAGINATION_SIZES[breakpoint]}
              />
            )}
          </>
        )}
      </MediaItemsContainer>
    </Column>
  )
}

export default Search
