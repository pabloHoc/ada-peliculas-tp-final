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

export const Select = styled.select`
  -webkit-appearance: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  padding: 3px 31px 3px 16px;
  color: ${({ theme }) => theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  background-color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  position: relative;
`

export const SelectWrapper = styled.div`
  position: relative;
  margin-right: 30px;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 7px;
    height: 7px;
    top: 50%;
    right: 14px;
    transform: translateY(-50%) rotateZ(-135deg);
    border-top: 2px solid ${({ theme }) => theme.colors.gray[100]};
    border-left: 2px solid ${({ theme }) => theme.colors.gray[100]};
    box-sizing: border-box;
  }
`
