import styled from "styled-components"

export const Container = styled.div``

export const Flex = styled.div`
  width: 100%;
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
  color: ${({ theme }) => theme.colors.text};
  font-size: ${props => props.theme.fonts.sizes[props.as]};
  font-weight: 300;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.sizes.p};
  font-weight: 300;

  font-size: 14px;
  line-height: 20px;
  margin-top: 0;
`

export const Image = styled.img`
  width: 100%;
`

export const Select = styled.select`
  width: 100%;
  -webkit-appearance: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  padding: 3px 31px 3px 16px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
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
    border-top: 2px solid ${({ theme }) => theme.colors.text};
    border-left: 2px solid ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const Column = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 20px;
`
