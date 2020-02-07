import React from "react"
import styled from "styled-components"

const DeleteButton = styled.button``
const Tag = styled.div``
const TagLabel = styled.p``

const CollectionTag = ({ label, onDelete }) => (
  <Tag>
    <TagLabel>{label}</TagLabel>
    <DeleteButton onClick={onDelete} />
  </Tag>
)

export default CollectionTag
