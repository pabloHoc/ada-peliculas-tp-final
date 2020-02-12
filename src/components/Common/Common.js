import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: ${props => props.alignItems || "flex-start"};
  flex-wrap: ${props => props.wrap || "wrap"};
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
  width: 100%;
`

export const Aside = styled.aside``

export const Title = styled.h1`
  font-size: 64px;
`
