import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { addList, useLists } from "apis/movieDb"
import { useAuth } from "utils/hooks/useAuth"
// import { getCollections, createCollection } from "apis/collections"

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
  // const [collections, setCollections] = useState([])
  const { username, sessionId } = useAuth()
  const [collections, updateCollections] = useLists(username, sessionId)

  const updateList = async () => {
    // const collections = await getCollections()
    // setCollections(collections)
  }

  useEffect(() => {
    updateCollections()
  }, [updateCollections])

  const handleChange = event => setName(event.target.value)
  const handleAddCollection = async () => {
    await addList(name, sessionId)
    updateCollections()
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
      {collections?.results.map(collection => (
        <CollectionWrapper key={collection.id}>
          <CollectionLink to={`/collections/${collection.id}`}>
            <h2>{collection.name}</h2>
            <p>{collection.item_count} films</p>
          </CollectionLink>
        </CollectionWrapper>
      ))}
    </div>
  )
}

export default CollectionList
