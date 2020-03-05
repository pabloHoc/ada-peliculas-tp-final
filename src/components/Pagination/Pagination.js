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

const PaginationItem = styled(ListItem)`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.active && props.theme.colors.light};
  border-radius: 50%;
  margin: 3px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.lighter};
  }
`

/**
 *
 * lastPage = 7
 * size = 5
 *
 */

const getPagination = (page, last, visible = 3) => {
  const pages = []

  const areAllVisible = last <= visible
  const isStart = !areAllVisible && page <= visible - 2
  const isMiddle =
    !areAllVisible && page > visible - 2 && page <= last - (visible - 2)

  if (areAllVisible) {
    for (let i = 1; i <= last; i++) {
      pages.push(i)
    }
  } else if (isStart) {
    for (let i = 1; i <= visible - 2; i++) {
      pages.push(i)
    }
    pages.push(-1, last)
  } else if (isMiddle) {
    if (visible === 7) {
      pages.push(1, -1, page - 1, page, page + 1, -1, last)
    } else if (visible === 5) {
      pages.push(1, -1, page, -1, last)
    } else {
      pages.push(1, page, last)
    }
  } else {
    pages.push(1, -1)
    for (let i = visible - 3; i >= 0; i--) {
      pages.push(last - i)
    }
  }

  return pages
}

// TODO: AGREGAR DISABLED

export const PAGINATION_SIZES = {
  MINIMUN: 3,
  SMALL: 5,
  DEFAULT: 7
}

const Pagination = ({
  current = 1,
  count,
  size = PAGINATION_SIZES.DEFAULT,
  onChange,
  className
}) => {
  const [value, setValue] = useState(current)

  useEffect(() => {
    setValue(current)
  }, [current])

  const handlePreviousPageClicked = () => value > 1 && onChange(current - 1)

  const handleNextPageClicked = () => current < count && onChange(current + 1)

  const handlePageClicked = nextPage => onChange(nextPage)

  return (
    <PaginationContainer className={className}>
      <PaginationItem>
        <PreviousPage onClick={handlePreviousPageClicked} />
      </PaginationItem>
      {getPagination(value, count, size).map(page => (
        <PaginationItem
          key={page}
          active={page === value}
          onClick={() => page !== -1 && handlePageClicked(page)}
        >
          {page !== -1 ? page : "..."}
        </PaginationItem>
      ))}
      <PaginationItem>
        <NextPage onClick={handleNextPageClicked} />
      </PaginationItem>
    </PaginationContainer>
  )
}

export default Pagination
