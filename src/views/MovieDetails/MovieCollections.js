import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { getCollections, addMovie, removeMovie } from "apis/collections"
import CollectionTag from "./CollectionTag"
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

const MovieCollections = ({ movieData }) => {
  const { id, original_title, poster_path } = movieData
  const [collections, setCollections] = useState([])
  const [currentCollections, setCurrentCollections] = useState([])

  const updateCollectionList = async () => {
    const collections = await getCollections()
    setCollections(collections)
  }

  useEffect(() => {
    updateCollectionList()
  }, [])

  useEffect(() => {
    const currentCollections = collections.filter(collection =>
      collection.movieIds.includes(id)
    )
    setCurrentCollections(currentCollections)
  }, [collections, id])

  const handleOnChange = async event => {
    await addMovie(event.target.value, { id, original_title, poster_path })
    updateCollectionList()
  }

  const handleRemoveFromCollection = async collectionId => {
    await removeMovie(collectionId, id)
    updateCollectionList()
  }

  return (
    <Flex>
      <Flex alignItems="center">
        <DropdownWrapper>
          <CollectionsDropwdown onChange={handleOnChange}>
            <option>Agregar a colección</option>
            {collections.map(collection => (
              <option key={collection.id} value={collection.id}>
                {collection.name}
              </option>
            ))}
          </CollectionsDropwdown>
        </DropdownWrapper>
        {currentCollections.map(collection => (
          <CollectionTag
            key={collection.id}
            label={collection.name}
            onDelete={() => handleRemoveFromCollection(collection.id)}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default MovieCollections
