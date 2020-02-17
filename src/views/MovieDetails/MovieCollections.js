import styled from "styled-components"
import { Flex } from "components/Common/Common"

const CollectionsDropwdown = styled.select`
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

const DropdownWrapper = styled.div`
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
