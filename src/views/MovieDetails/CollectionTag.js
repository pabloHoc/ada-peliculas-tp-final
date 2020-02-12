import React from "react"
import styled from "styled-components"
import { Times } from "styled-icons/typicons/Times"

const DeleteIcon = styled(Times)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
`

const Tag = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 100px;
  font-size: 12px;
  padding: 2px 15px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.purple};
`
const CollectionTag = ({ label, onDelete }) => (
  <Tag>
    {label}
    <DeleteIcon onClick={onDelete} />
  </Tag>
)

export default CollectionTag
