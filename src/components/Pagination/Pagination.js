import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { ArrowLeft } from "styled-icons/feather/ArrowLeft"
import { ArrowRight } from "styled-icons/feather/ArrowRight"
import { List, ListItem } from "components/Common/Common"

const PreviousPage = styled(ArrowLeft)`
  width: 30px;
`

const NextPage = styled(ArrowRight)`
  width: 30px;
`

const PaginationContainer = styled(List)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PaginationItem = styled(ListItem)``

// TODO: AGREGAR DISABLED

const Pagination = ({ page = 1, count, onChange, className }) => {
  const [value, setValue] = useState(page)

  useEffect(() => {
    setValue(page)
  }, [page])

  const handlePreviousPageClicked = () => value > 1 && onChange(page - 1)

  const handleNextPageClicked = () => page < count && onChange(page + 1)

  const handlePageClicked = nextPage => onChange(nextPage)

  return (
    <PaginationContainer className={className}>
      <PaginationItem>
        <PreviousPage onClick={handlePreviousPageClicked} />
      </PaginationItem>
      {page > 1 && (
        <PaginationItem onClick={() => handlePageClicked(1)}>1</PaginationItem>
      )}
      {page > 2 && <PaginationItem>...</PaginationItem>}
      <PaginationItem>{page}</PaginationItem>
      {page < count - 1 && <PaginationItem>...</PaginationItem>}
      {page < count && (
        <PaginationItem onClick={() => handlePageClicked(count)}>
          {count}
        </PaginationItem>
      )}
      <PaginationItem>
        <NextPage onClick={handleNextPageClicked} />
      </PaginationItem>
    </PaginationContainer>
  )
}

export default Pagination
