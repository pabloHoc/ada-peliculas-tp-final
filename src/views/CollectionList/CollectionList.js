import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { getCollections, createCollection } from "apis/collections"

const CollectionWrapper = styled.article``

const CollectionLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`
const Flex = styled.div`
  display: flex;
`
const CollectionNameInput = styled.input``
const AddCollectionButton = styled.button``

const CollectionList = () => {
  const [name, setName] = useState("")
  const [collections, setCollections] = useState([])

  const updateList = async () => {
    const collections = await getCollections()
    setCollections(collections)
  }

  useEffect(() => {
    const fetchData = () => {
      updateList()
    }
    fetchData()
  }, [])

  const handleChange = event => setName(event.target.value)
  const handleAddCollection = async () => {
    await createCollection({ name })
    updateList()
  }

  return (
    <div>
      <Flex>
        <CollectionNameInput type="text" value={name} onChange={handleChange} />
        <AddCollectionButton onClick={handleAddCollection}>
          Create
        </AddCollectionButton>
      </Flex>
      <h1>Collections</h1>
      {collections.map(collection => (
        <CollectionWrapper key={collection.id}>
          <CollectionLink to={`/collections/${collection.id}`}>
            <h2>{collection.name}</h2>
            <p>{collection.movies.length} films</p>
          </CollectionLink>
        </CollectionWrapper>
      ))}
    </div>
  )
}

export default CollectionList
