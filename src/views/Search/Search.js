import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory, useParams, useRouteMatch } from "react-router-dom"
import PATHS from "constants/paths"

import { useSearch } from "utils/hooks/useSearch"
import { useSearchTitle } from "utils/hooks/useSearchTitle"

import MediaList from "components/MediaList/MediaList"
import { Flex, Title } from "components/Common/Common"
import Pagination from "components/Pagination/Pagination"

const MediaItemsContainer = styled(Flex)`
  flex-basis: 80%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

const StyledTitle = styled(Title)`
  margin: 10px 10px 20px;
`

const StyledPagination = styled(Pagination)`
  align-self: center;
`

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
    <MediaItemsContainer className={className} flexDirection="column">
      <StyledTitle>{title}</StyledTitle>
      {!isLoading && !results.length ? (
        <h2>No se han encontrado resultados</h2>
      ) : (
        <>
          <MediaList items={results} media={media} />
          {total_pages > 1 && (
            <StyledPagination
              page={nextPage}
              count={total_pages}
              onChange={handlePageChange}
            />
          )}
        </>
      )}
    </MediaItemsContainer>
  )
}

export default Search
