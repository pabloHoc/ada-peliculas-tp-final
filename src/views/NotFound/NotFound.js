import React from "react"

import { useResponsive } from "utils/hooks/useResponsive"

import styled from "styled-components"
import { TimesCircle } from "@styled-icons/fa-regular/TimesCircle"
import { Column, Title } from "components/Common/Common"

const CenteredTextColumn = styled(Column)`
  text-align: center;
`

const ErrorIcon = styled(TimesCircle)`
  width: 200px;
  height: 200px;
  color: ${({ theme }) => theme.colors.text};
  margin: 80px 0 40px;

  @media (max-width: 500px) {
    width: 150px;
    height: 150px;
  }
`

const NoMatch = () => {
  const breakpoint = useResponsive()

  return (
    <CenteredTextColumn>
      <ErrorIcon />
      <Title as={!["XS", "SM"].includes(breakpoint) ? "h1" : "h2"}>
        Esta página no existe
      </Title>
      <Title as={!["XS", "SM"].includes(breakpoint) ? "h2" : "h3"}>
        Pruebe realizando una búsqueda
      </Title>
    </CenteredTextColumn>
  )
}

export default NoMatch
