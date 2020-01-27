import React from "react"
import styled from "styled-components"

const collections = [
  {
    id: 1,
    name: "Por ver"
  },
  {
    id: 2,
    name: "Pendientes"
  },
  {
    id: 3,
    name: "Top 10 Ciencia Ficción"
  }
]

const CollectionWrapper = styled.article``

const CollectionLink = styled.a`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`

const CollectionList = () => {
  return (
    <div>
      <h1>Collections</h1>
      {collections.map(collection => (
        <CollectionWrapper key={collection.id}>
          <CollectionLink href={`/collections/${collection.id}`}>
            <h2>{collection.name}</h2>
            <p>10 films</p>
          </CollectionLink>
        </CollectionWrapper>
      ))}
    </div>
  )
}

export default CollectionList
