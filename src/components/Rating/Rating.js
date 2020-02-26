import React from "react"
import { Star } from "styled-icons/material/Star"
import { StarHalf } from "styled-icons/material/StarHalf"
import { StarBorder } from "styled-icons/material/StarBorder"
import styled, { css } from "styled-components"
import { Flex } from "components/Common/Common"

const roundToNextHalf = n => Math.ceil(n * 2) / 2

const BaseStarIcon = css`
  width: 20px;
  height: 20px;
  margin-right: 3px;
  color: white;
`

const StarFilledIcon = styled(Star)`
  ${BaseStarIcon}
`

const StarHalfIcon = styled(StarHalf)`
  ${BaseStarIcon}
`

const StarEmptyIcon = styled(StarBorder)`
  ${BaseStarIcon}
`

const Rating = ({ score }) => {
  const roundedScore = roundToNextHalf(score)
  const filledStars = Math.floor(roundedScore) || 0
  const halfStars = roundedScore !== Math.round(roundedScore) ? 1 : 0
  const emptyStars = 5 - halfStars - filledStars

  return (
    <Flex>
      {[...Array(filledStars).keys()].map(n => (
        <StarFilledIcon key={n} />
      ))}
      {!!halfStars && <StarHalfIcon />}
      {[...Array(emptyStars).keys()].map(n => (
        <StarEmptyIcon key={n} />
      ))}
    </Flex>
  )
}

export default Rating
